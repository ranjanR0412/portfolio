
(function () {
  var link = document.getElementById('dwlCv');
  if (!link) return;
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var b64 = document.getElementById('cv-embed').textContent.trim();
    var bin = atob(b64), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    var url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    var a = document.createElement('a');
    a.href = url; a.download = 'CV_RohitRanjan.pdf';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  });
})();

//experience tenure changes
(function () {
  const exp = document.getElementById('num_exp');
  // Define the two dates
  const date1 = new Date("2021-09-28"); // YYYY-MM-DD format
  const date2 = new Date(); // today's date

  // Calculate total difference in months
  let years = date2.getFullYear() - date1.getFullYear();
  let months = date2.getMonth() - date1.getMonth();
 let days = date2.getDate() - date1.getDate();

  // Adjust if days difference is negative
  if (days < 0) {
    months--;
    // Get days in the previous month of date2
    const prevMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Adjust if months difference is negative
  if (months < 0) {
    years--;
    months += 12;
  }

  if(days >= 0 ){
    daysPlus = '+';
  }

  const totalExp = `${years}${daysPlus}`;
  exp.innerText = totalExp;
  console.log(`Difference: ${years}${daysPlus}`);
})();


//typewriter effect

  const phrases = [
    'Selenium + Java + JavaScript',
    'Ui Testing + JIRA + Regression Testing',
    'Jenkins + Maven + CI/CD Pipelines',
    'Infosys · LTM'
  ];
  let pi = 0, ci = 0, deleting = false;
  const tw = document.getElementById('typewriter');
  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      tw.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(type, 1300); return; }
    } else {
      tw.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 40 : 70);
  }
  type();

  // SCROLL REVEAL
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // NAV ACTIVE
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
    navLinks.forEach(a => {
      const href = a.getAttribute('href');
      a.style.color = href === '#' + cur ? 'var(--accent)' : '';
    });
  });

  // HAMBURGER
  function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
  }

