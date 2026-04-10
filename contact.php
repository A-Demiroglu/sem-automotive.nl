

<?php
session_start();


$recipientEmail = 'info@sem-automotive.nl';
$siteEmail = 'no-reply@sem-automotive.nl';

$flash = $_SESSION['contact_flash'] ?? null;
$old = $_SESSION['contact_old'] ?? [
    'name' => '',
    'email' => '',
    'subject' => '',
    'message' => '',
];

unset($_SESSION['contact_flash'], $_SESSION['contact_old']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');
    $honeypot = trim($_POST['company'] ?? '');

    $_SESSION['contact_old'] = [
        'name' => $name,
        'email' => $email,
        'subject' => $subject,
        'message' => $message,
    ];

    if ($honeypot !== '') {
        $_SESSION['contact_flash'] = [
            'type' => 'success',
            'message' => 'Bedankt. Uw bericht is ontvangen.',
        ];
        header('Location: contact.php');
        exit;
    }

    $errors = [];

    if ($name === '') {
        $errors[] = 'Vul uw naam in.';
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Vul een geldig e-mailadres in.';
    }

    if ($subject === '') {
        $errors[] = 'Vul een onderwerp in.';
    }

    if ($message === '') {
        $errors[] = 'Vul een bericht in.';
    }

    if (mb_strlen($message) < 10) {
        $errors[] = 'Het bericht is te kort. Voeg iets meer informatie toe.';
    }

    if ($errors) {
        $_SESSION['contact_flash'] = [
            'type' => 'danger',
            'message' => implode(' ', $errors),
        ];
        header('Location: contact.php');
        exit;
    }

    $safeName = str_replace(["\r", "\n"], ' ', $name);
    $safeEmail = str_replace(["\r", "\n"], '', $email);
    $safeSubject = str_replace(["\r", "\n"], ' ', $subject);

    $mailSubject = 'Nieuw contactformulier: ' . $safeSubject;
    $mailBody = implode("\n", [
        'Nieuw bericht via sem-automotive.nl',
        '',
        'Naam: ' . $safeName,
        'E-mail: ' . $safeEmail,
        'Onderwerp: ' . $safeSubject,
        '',
        'Bericht:',
        $message,
    ]);

    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: SEM Automotive <' . $siteEmail . '>',
        'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    ];

    $sent = mail($recipientEmail, $mailSubject, $mailBody, implode("\r\n", $headers));

    $_SESSION['contact_flash'] = $sent
        ? ['type' => 'success', 'message' => 'Bedankt. Uw bericht is succesvol verstuurd.']
        : ['type' => 'danger', 'message' => 'Het bericht kon niet worden verstuurd. Controleer de mailinstellingen van de server of probeer het later opnieuw.'];

    if ($sent) {
        $_SESSION['contact_old'] = [
            'name' => '',
            'email' => '',
            'subject' => '',
            'message' => '',
        ];
    }

    header('Location: contact.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Neem contact op met SEM Automotive voor voorraad, bezichtiging, inruil of aankoopbegeleiding.">
<title>Contact | SEM Automotive</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<link rel="stylesheet" href="assets/css/theme.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-dark fixed-top site-navbar">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-3" href="index.html">
      <img src="assets/images/logo.png" alt="SEM Automotive logo">
      <span class="brand-text">
        <span class="brand-name">SEM AUTOMOTIVE</span>
        <span class="brand-tag">Premium occasions</span>
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Menu openen">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="voorraad.html">Voorraad</a></li>
        <li class="nav-item"><a class="nav-link" href="diensten.html">Diensten</a></li>
        <li class="nav-item"><a class="nav-link" href="over-ons.html">Over ons</a></li>
        <li class="nav-item"><a class="nav-link active" href="contact.php">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<main class="page-shell">
  <section class="page-hero">
    <div class="container">
      <div class="page-hero-panel" data-reveal>
        <span class="eyebrow mb-3"><i class="fa-solid fa-envelope-open-text"></i> Contact</span>
        <h1>Neem direct contact op voor bezichtiging, voorraad of advies.</h1>
        <p class="lead-soft mb-0">Het formulier hieronder verwerkt inzendingen nu server-side en probeert ze direct naar het e-mailadres van SEM Automotive te sturen.</p>
      </div>
    </div>
  </section>

  <section class="section-space-sm">
    <div class="container">
      <?php if ($flash): ?>
      <div class="alert alert-<?= htmlspecialchars($flash['type'], ENT_QUOTES, 'UTF-8') ?> mb-4" role="alert">
        <?= htmlspecialchars($flash['message'], ENT_QUOTES, 'UTF-8') ?>
      </div>
      <?php endif; ?>
      <div class="row g-4 align-items-stretch">
        <div class="col-lg-5" data-reveal>
          <div class="contact-card h-100">
            <span class="eyebrow mb-3"><i class="fa-solid fa-address-book"></i> Gegevens</span>
            <ul class="contact-list mt-3">
              <li><i class="fa-solid fa-location-dot"></i><span><strong>Adres</strong><br>Dukdalf 16-8, 9202 BE Drachten</span></li>
              <li><i class="fa-solid fa-phone"></i><span><strong>Telefoon</strong><br><a href="tel:0653299783">0653299783</a></span></li>
              <li><i class="fa-solid fa-envelope"></i><span><strong>E-mail</strong><br><a href="mailto:info@sem-automotive.nl">info@sem-automotive.nl</a></span></li>
              <li><i class="fa-brands fa-whatsapp"></i><span><strong>WhatsApp</strong><br><a href="https://wa.me/31638075625" target="_blank" rel="noopener">Start direct een gesprek</a></span></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-7" data-reveal>
          <div class="contact-card h-100">
            <span class="eyebrow mb-3"><i class="fa-solid fa-paper-plane"></i> Bericht sturen</span>
            <form class="mt-3" method="post" action="contact.php" novalidate>
              <div class="row g-3">
                <div class="col-md-6">
                  <input class="form-control" type="text" name="name" placeholder="Naam" value="<?= htmlspecialchars($old['name'], ENT_QUOTES, 'UTF-8') ?>" required>
                </div>
                <div class="col-md-6">
                  <input class="form-control" type="email" name="email" placeholder="E-mailadres" value="<?= htmlspecialchars($old['email'], ENT_QUOTES, 'UTF-8') ?>" required>
                </div>
                <div class="col-12">
                  <input class="form-control" type="text" name="subject" placeholder="Onderwerp" value="<?= htmlspecialchars($old['subject'], ENT_QUOTES, 'UTF-8') ?>" required>
                </div>
                <div class="col-12 d-none">
                  <input class="form-control" type="text" name="company" tabindex="-1" autocomplete="off">
                </div>
                <div class="col-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Vertel kort waar u naar op zoek bent of waar u hulp bij wilt." required><?= htmlspecialchars($old['message'], ENT_QUOTES, 'UTF-8') ?></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-premium" type="submit">Versturen</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-space-sm pt-0">
    <div class="container" data-reveal>
      <div class="map-shell">
        <iframe class="contact-map" src="https://www.google.com/maps?q=Dukdalf%2016-8%20Drachten&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen title="Kaart naar SEM Automotive"></iframe>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container">
    <div class="row g-4 align-items-center">
      <div class="col-lg-8">
        <div class="footer-copy">
          <strong>SEM Automotive</strong><br>
          Dukdalf 16-8, 9202 BE Drachten<br>
          0653299783 · info@sem-automotive.nl
        </div>
      </div>
      <div class="col-lg-4">
        <div class="socials">
          <a class="social" href="https://www.facebook.com/p/SEMperformance-61566745449635/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a class="social" href="https://www.instagram.com/sem_automotive/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a class="social" href="https://wa.me/31638075625" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="assets/js/main.js"></script>
</body>
</html>
