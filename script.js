/* ═══════════════════════════════════════════════════
   C++ Study Hub – script.js (المصحح والمثبت)
   ═══════════════════════════════════════════════════ */

function hl(code) {
  const keywords = /\b(int|float|double|char|bool|string|void|return|if|else|while|for|do|switch|case|break|default|const|new|struct|using|namespace|include|true|false|endl|cin|cout)\b/g;
  const types    = /\b(int|float|double|char|bool|string|void)\b/g;
  const strings  = /"([^"]*)"/g;
  const comments = /(\/\/.*)/g;
  const numbers  = /\b(\d+\.?\d*)\b/g;
  const funcs    = /\b([a-zA-Z_]\w*)\s*(?=\()/g;

  let h = code
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  h = h.replace(comments,   '<span class="cm">$1</span>');
  h = h.replace(strings,    '<span class="st">"$1"</span>');
  h = h.replace(keywords,   '<span class="kw">$1</span>');
  h = h.replace(funcs,      '<span class="fn">$1</span>');
  h = h.replace(numbers,    '<span class="nm">$1</span>');
  return h;
}

const SECTIONS = [
  {
    id: 'variables',
    name: 'Variables & I/O',
    icon: '📦',
    cards: [
      {
        id: 'v1',
        title: 'مثال ١ – طباعة بيانات شخصية (بدون إدخال)',
        tags: ['basic','exam'],
        idea: `<strong>الفكرة:</strong> نعرف متغيرات بأنواع مختلفة (int, string, char, bool) ونطبعها مباشرة بـ <code>cout</code>. لاحظ إن bool بيطبع 1 لو true و 0 لو false.`,
        hint: 'استخدم cout << متغير << endl لكل سطر. جرب تغير قيمة bool وتشوف النتيجة!',
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 18;\n    string name = "Ahmed";\n    char surname_first_letter = 'M';\n    bool student = true;\n\n    cout << "Age= " << age << endl;\n    cout << "Name= " << name << endl;\n    cout << "surname_first_letter= " << surname_first_letter << endl;\n    cout << "Student= " << student << endl;\n\n    return 0;\n}`,
        output: `Age= 18\nName= Ahmed\nsurname_first_letter= M\nStudent= 1`,
        explanation: [
          'int age = 18  →  يحجز مكان في الذاكرة لرقم صحيح',
          'string name = "Ahmed"  →  نص، لازم double quotes',
          'char  →  حرف واحد بين single quotes',
          'bool student = true  →  يُطبع 1 لأن true = 1 في C++',
          'endl  →  ينتهي السطر ويروح لسطر جديد'
        ]
      },
      {
        id: 'v2',
        title: 'مثال ٢ – إدخال بيانات من المستخدم (cin)',
        tags: ['basic','exam'],
        idea: `<strong>الفكرة:</strong> نفس المثال السابق لكن بدل ما نحدد القيم داخل الكود، نطلبها من المستخدم باستخدام <code>cin</code>.`,
        hint: 'cin >> متغير  ← يقرأ من لوحة المفاتيح.',
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 18;\n    string name = "Ahmed";\n    char surname_first_letter = 'M';\n    bool student = true;\n\n    cout << "Enter your Age= ";\n    cin >> age;\n    cout << "Enter your Name= ";\n    cin >> name;\n    cout << "Enter your surname_first_letter= ";\n    cin >> surname_first_letter;\n    cout << "Are you Student= ";\n    cin >> student;\n\n    cout << "----------------Your Data------------" << endl;\n    cout << "Age= " << age << endl;\n    cout << "Name= " << name << endl;\n    cout << "surname_first_letter= " << surname_first_letter << endl;\n    cout << "Student= " << student << endl;\n\n    return 0;\n}`,
        output: `Enter your Age= 20\nEnter your Name= Sara\n...`,
        explanation: ['cin >>  ← يقرأ إدخال المستخدم ويخزنه في المتغير']
      }
    ]
  },
  {
    id: 'operators',
    name: 'Operators',
    icon: '🔢',
    cards: [
      {
        id: 'op1',
        title: 'تمرين ١ – العمليات الحسابية الخمس',
        tags: ['exam','imp'],
        idea: `<strong>الفكرة:</strong> نقرأ عددين صحيحين ونحسب: الجمع، الطرح، الضرب، القسمة الصحيحة، والباقي (Modulus).`,
        hint: 'عشان القسمة تطلع بالكسر لازم المتغير يكون float أو double.',
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num1, num2;\n    int sum, sub, mul, divis, mod;\n    cin >> num1 >> num2;\n    sum = num1 + num2;\n    divis = num1 / num2;\n    mod = num1 % num2;\n    return 0;\n}`,
        output: `Sum= 17\nDivision= 1\nModulus= 3`,
        explanation: ['%  ← الباقي من القسمة (10 % 7 = 3)']
      }
    ]
  },
  {
    id: 'conditionals',
    name: 'Conditionals & Switch',
    icon: '🔀',
    cards: [
      {
        id: 'c1',
        title: 'مثال ٦ – تصنيف الموظف (if / else if / else)',
        tags: ['exam','imp'],
        idea: `<strong>الفكرة:</strong> نستخدم if-else if-else لتصنيف الموظف حسب سنوات الخبرة.`,
        hint: 'انتبه لترتيب الشروط! لو عكست الترتيب ممكن يدخل في شرط غلط.',
        code: `#include <iostream>\nusing namespace std;\nint main() {\n    double years;\n    cin >> years;\n    if (years > 0 && years <= 1.0) cout << "Newcomer";\n    else if (years > 1 && years <= 3.0) cout << "Junior";\n    else cout << "Senior";\n    return 0;\n}`,
        output: `Employee is a Junior`,
        explanation: ['&&  ← AND – الشرطين لازم يتحققوا مع بعض']
      }
    ]
  },
  {
    id: 'loops',
    name: 'Loops',
    icon: '🔁',
    cards: [
      {
        id: 'l1',
        title: 'مثال – جمع 4 أعداد بـ for loop',
        tags: ['exam','basic'],
        idea: `<strong>الفكرة:</strong> for loop يكرر الكود عدد معين من المرات.`,
        hint: 'sum += number  ←  هي اختصار لـ sum = sum + number.',
        code: `#include <iostream>\nusing namespace std;\nint main() {\n    int number, sum = 0;\n    for (int i = 1; i <= 4; i++) {\n        cin >> number;\n        sum += number;\n    }\n    cout << sum;\n    return 0;\n}`,
        output: `The sum of the 4 integers is: 10`,
        explanation: ['sum = 0  ← ضروري نبدأ بصفر عشان الجمع يبقى صح']
      }
    ]
  },
  {
    id: 'functions',
    name: 'Functions',
    icon: '🧩',
    cards: [
      {
        id: 'f1',
        title: 'مثال ٢ – void function: جمع عددين',
        tags: ['basic','exam'],
        idea: `<strong>الفكرة:</strong> void function لا تُرجع قيمة.`,
        hint: 'void تعني "لا تُرجع شيء".',
        code: `#include <iostream>\nusing namespace std;\nvoid sum() {\n    int n1, n2;\n    cin >> n1 >> n2;\n    cout << n1+n2;\n}\nint main() {\n    sum();\n    return 0;\n}`,
        output: `The summation of the two numbers is: 30`,
        explanation: ['void sum()  ← تعريف الـ function، void = لا تُرجع شيء']
      }
    ]
  },
  {
    id: 'arrays',
    name: 'Arrays',
    icon: '🗂️',
    cards: [
      {
        id: 'a1',
        title: 'مثال ٢ – مصفوفة الأرقام الزوجية',
        tags: ['exam','basic'],
        idea: `<strong>الفكرة:</strong> نملأ مصفوفة بالأرقام الزوجية من 0 إلى 50.`,
        hint: 'const int arrSize = 25  ← لازم const عشان حجم المصفوفة ثابت.',
        code: `#include <iostream>\nusing namespace std;\nint main() {\n    const int arrSize = 25;\n    int num[arrSize] = {0};\n    return 0;\n}`,
        output: `Displaying all array elements...`,
        explanation: ['const int arrSize = 25  ← ضروري لتعريف حجم المصفوفة']
      }
    ]
  },
  {
    id: 'structs',
    name: 'Structs',
    icon: '🏗️',
    cards: [
      {
        id: 'st1',
        title: 'Struct: بيانات طالبين وحساب المتوسط',
        tags: ['exam','imp'],
        idea: `<strong>الفكرة:</strong> Struct بيجمع بيانات مختلفة الأنواع في نوع واحد مخصص.`,
        hint: 'تصل للمحتوى بالـ dot: s1.id, s1.grade',
        code: `struct Student {\n    int id;\n    float grade;\n};`,
        output: `Student Data...`,
        explanation: ['Struct بيجمع بيانات مختلفة الأنواع في نوع واحد مخصص']
      }
    ]
  }
];

const FLASHCARDS = [
  { q: "ما هو الـ Variable؟", a: "مكان محجوز في الذاكرة (RAM) له اسم ونوع وقيمة لتخزين البيانات أثناء تشغيل البرنامج." },
  { q: "ما الفرق بين x++ و ++x؟", a: "x++ تزيد القيمة بعد استخدامها في السطر الحالي، بينما ++x تزيد القيمة أولاً قبل استخدامها." },
  { q: "متى نستخدم الـ void في الدوال؟", a: "عندما تقوم الدالة بوظيفة معينة (مثل الطباعة) ولا تحتاج لإرجاع أي قيمة رياضية أو نصية للكود المستدعي." },
  { q: "لماذا نستخدم الـ break في سويتش؟", a: "لإيقاف التنفيذ فوراً والخروج من الـ switch، وبدونها سيقوم الكود بتنفيذ الحالات التالية تلقائياً." }
];

const QUIZ_QUESTIONS = [
  { topic: 'Variables', q: "أي من التالي هو إعلان صحيح لمتغير نصي في C++؟", options: ["string name = 'Ahmed';", "string name = \"Ahmed\";", "char name = \"Ahmed\";"], correct: 1 },
  { topic: 'Loops', q: "كم مرة ستنفذ اللوب: for(int i=0; i<5; i++)؟", options: ["4 مرات", "5 مرات", "6 مرات"], correct: 1 },
  { topic: 'Functions', q: "ماذا تعني كلمة void قبل اسم الدالة؟", options: ["الدالة تُرجع رقماً صحيحاً", "الدالة لا تُرجع أي قيمة", "الدالة تحتوي على خطأ"], correct: 1 }
];

let doneCards = JSON.parse(localStorage.getItem('cpp_done_cards')) || [];
let currentFlashIndex = 0;
let activeFlashcards = [...FLASHCARDS];

document.addEventListener('DOMContentLoaded', () => {
  renderDynamicSections();
  updateStats();
  initFlashcards();
  initQuiz();
  
  // التأكد من أن التبديل بين الأقسام يعمل فور التحميل
  navigate('dashboard');
});

function renderDynamicSections() {
  const container = document.getElementById('dynamic-sections');
  if(!container) return;
  container.innerHTML = '';

  SECTIONS.forEach(sec => {
    const secEl = document.createElement('section');
    secEl.id = `sec-${sec.id}`;
    secEl.className = 'section';

    let cardsHtml = '';
    sec.cards.forEach(card => {
      const isDone = doneCards.includes(card.id);
      cardsHtml += `
        <div class="study-card" id="card-${card.id}">
          <div class="card-top">
            <div class="card-tags">
              ${card.tags.map(t => `<span class="tag ${t}">${t.toUpperCase()}</span>`).join('')}
            </div>
            <button class="btn-check ${isDone ? 'checked' : ''}" onclick="toggleCardDone('${card.id}')">
              ${isDone ? '✓ تمت المذاكرة' : '◯ علم كتمت المذاكرة'}
            </button>
          </div>
          <h2 class="card-title">${card.title}</h2>
          <div class="card-idea">${card.idea}</div>
          
          <div class="card-actions">
            <button class="btn btn-hint" onclick="toggleVisibility('hint-${card.id}')">💡 تلميح</button>
            <button class="btn btn-primary" onclick="toggleVisibility('sol-${card.id}')">💻 إظهار الحل</button>
          </div>

          <div class="hint-box hidden" id="hint-${card.id}">${card.hint}</div>

          <div class="sol-box hidden" id="sol-${card.id}">
            <div class="code-header">C++ Code</div>
            <pre class="code-block"><code>${hl(card.code)}</code></pre>
            <div class="code-header" style="margin-top:1rem;--c:var(--yellow)">Expected Output</div>
            <pre class="output-block"><code>${card.output}</code></pre>
            <div class="explanation-zone">
              <div class="exp-title">🔍 الشرح والملاحظات سطر بسطر:</div>
              <ul class="exp-list">
                ${card.explanation.map(li => `<li>${li}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    });

    secEl.innerHTML = `
      <div class="section-header">
        <h1 class="section-title">${sec.icon} ${sec.name}</h1>
        <p class="section-desc">أمثلة وتطبيقات عملية على الشابتر</p>
      </div>
      ${cardsHtml}
    `;
    container.appendChild(secEl);
  });
}

function navigate(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const targetSec = document.getElementById(`sec-${sectionId}`);
  if(targetSec) targetSec.classList.add('active');

  const targetNav = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if(targetNav) targetNav.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  const sidebar = document.getElementById('sidebar');
  if(sidebar) sidebar.classList.remove('open');
}

function toggleVisibility(id) {
  const el = document.getElementById(id);
  if(el) el.classList.toggle('hidden');
}

function toggleCardDone(id) {
  if(doneCards.includes(id)) {
    doneCards = doneCards.filter(c => c !== id);
  } else {
    doneCards.push(id);
  }
  localStorage.setItem('cpp_done_cards', JSON.stringify(doneCards));
  
  // تحديث شكل الزرار الحالي
  const btn = document.querySelector(`#card-${id} .btn-check`);
  if(btn) {
    if(doneCards.includes(id)) {
      btn.classList.add('checked');
      btn.innerHTML = '✓ تمت المذاكرة';
    } else {
      btn.classList.remove('checked');
      btn.innerHTML = '◯ علم كتمت المذاكرة';
    }
  }
  updateStats();
}

function updateStats() {
  let totalCards = 0;
  SECTIONS.forEach(s => totalCards += s.cards.length);

  const doneCount = doneCards.length;
  const remCount = Math.max(0, totalCards - doneCount);
  const pct = totalCards > 0 ? Math.round((doneCount / totalCards) * 100) : 0;

  if(document.getElementById('stat-done')) document.getElementById('stat-done').innerText = doneCount;
  if(document.getElementById('stat-remaining')) document.getElementById('stat-remaining').innerText = remCount;
  if(document.getElementById('stat-pct')) document.getElementById('stat-pct').innerText = pct + '%';

  const miniBar = document.getElementById('mini-progress-bar');
  const miniTxt = document.getElementById('mini-pct-text');
  if(miniBar) miniBar.style.width = pct + '%';
  if(miniTxt) miniTxt.innerText = pct + '%';
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  if(sb) sb.classList.toggle('open');
}

function resumeStudy() {
  let targetSection = 'variables';
  for (let sec of SECTIONS) {
    const unread = sec.cards.find(c => !doneCards.includes(c.id));
    if(unread) {
      targetSection = sec.id;
      break;
    }
  }
  navigate(targetSection);
}

function openRandomChallenge() {
  let allCards = [];
  SECTIONS.forEach(s => allCards.push(...s.cards));
  if(allCards.length === 0) return;
  
  const randCard = allCards[Math.floor(Math.random() * allCards.length)];
  const placeholder = document.getElementById('modal-card-placeholder');
  
  if(placeholder) {
    const isDone = doneCards.includes(randCard.id);
    placeholder.innerHTML = `
      <div class="study-card" style="box-shadow:none;background:transparent;padding:0;">
        <h2 class="card-title">${randCard.title}</h2>
        <div class="card-idea">${randCard.idea}</div>
        <div class="card-actions">
          <button class="btn btn-primary" onclick="toggleVisibility('modal-sol-${randCard.id}')">💻 كشف الحل المفاجئ</button>
        </div>
        <div class="sol-box hidden" id="modal-sol-${randCard.id}">
          <pre class="code-block"><code>${hl(randCard.code)}</code></pre>
        </div>
      </div>
    `;
  }
  
  const modal = document.getElementById('challenge-modal');
  if(modal) modal.classList.add('open');
}

function closeRandomChallenge() {
  const modal = document.getElementById('challenge-modal');
  if(modal) modal.classList.remove('open');
}

function initFlashcards() {
  currentFlashIndex = 0;
  showFlashcard();
}

function showFlashcard() {
  const stage = document.getElementById('fc-stage');
  const counter = document.getElementById('fc-counter');
  if(!stage || activeFlashcards.length === 0) return;

  const card = activeFlashcards[currentFlashIndex];
  const inner = document.getElementById('flip-inner');
  if(inner) inner.classList.remove('flipped');

  document.getElementById('flip-front').innerHTML = `<div class="flip-q">❓ السؤال:</div><div style="font-size:1.1rem;font-weight:700;">${card.q}</div><div class="flip-tap">اضغط لقلب الكارت 🔄</div>`;
  document.getElementById('flip-back').innerHTML = `<div class="flip-a">💡 الإجابة / الفكرة الأساسية:</div><div style="line-height:1.6;color:var(--green);">${card.a}</div><div class="flip-tap">اضغط للعودة 🔄</div>`;

  if(counter) counter.innerText = `${currentFlashIndex + 1} / ${activeFlashcards.length}`;
}

function flipCard() {
  const inner = document.getElementById('flip-inner');
  if(inner) inner.classList.toggle('flipped');
}

function nextFlash() {
  if(activeFlashcards.length === 0) return;
  currentFlashIndex = (currentFlashIndex + 1) % activeFlashcards.length;
  showFlashcard();
}

function prevFlash() {
  if(activeFlashcards.length === 0) return;
  currentFlashIndex = (currentFlashIndex - 1 + activeFlashcards.length) % activeFlashcards.length;
  showFlashcard();
}

function shuffleFlash() {
  activeFlashcards.sort(() => Math.random() - 0.5);
  currentFlashIndex = 0;
  showFlashcard();
}

function initQuiz() {
  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById('quiz-container');
  if(!container) return;

  let html = '';
  QUIZ_QUESTIONS.forEach((q, idx) => {
    html += `
      <div class="quiz-card" id="quiz-q-${idx}">
        <div style="display:flex;justify-content:between;margin-bottom:.5rem;">
          <span class="tag basic" style="background:var(--bg3);color:var(--blue)">${q.topic}</span>
          <span style="font-size:.8rem;color:var(--text3)">سؤال ${idx+1}</span>
        </div>
        <div class="quiz-question">${q.q}</div>
        <div class="quiz-options">
          ${q.options.map((opt, oIdx) => `
            <label class="quiz-opt">
              <input type="radio" name="quiz-ans-${idx}" value="${oIdx}">
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  });

  html += `<button class="btn btn-primary btn-lg" style="width:100%;margin-top:1rem;" onclick="submitQuiz()">📊 إرسال الإجابات وحساب النتيجة</button>`;
  container.innerHTML = html;
}

function submitQuiz() {
  let correct = 0;
  let weakAreas = [];

  QUIZ_QUESTIONS.forEach((q, i) => {
    const selected = document.querySelector(`input[name="quiz-ans-${i}"]:checked`);
    const ansVal = selected ? parseInt(selected.value) : -1;
    
    if (ansVal === q.correct) {
      correct++;
    } else {
      weakAreas.push(`${q.topic}: "${q.q}"`);
    }
  });

  const pct = Math.round((correct / QUIZ_QUESTIONS.length) * 100);
  let cls = 'great', msg = '🎉 ممتاز! أنت جاهز للامتحان!';
  if (pct < 70)  { cls = 'mid';  msg = '📚 نتيجة متوسطة، راجع الأقسام الضعيفة وحاول مجدداً.'; }
  if (pct < 40)  { cls = 'low';  msg = '💪 تحتاج لمزيد من المراجعة والتركيز، التكرار يعلم الشطار!'; }

  const weakHtml = weakAreas.length > 0
    ? `<div class="weak-areas">
        <div class="weak-title">⚠️ نقاط الضعف التي تحتاج مراجعة:</div>
        ${weakAreas.map(w => `<div style="font-size:.85rem;color:var(--text2);padding:.25rem 0;">• ${w}</div>`).join('')}
       </div>`
    : '';

  document.getElementById('quiz-container').innerHTML = `
    <div class="quiz-result">
      <div class="result-score ${cls}">${correct} / ${QUIZ_QUESTIONS.length}</div>
      <div style="font-size:1rem;color:var(--text3);margin-bottom:1rem;">${pct}% إجابات صحيحة</div>
      <div class="result-msg">${msg}</div>
      ${weakHtml}
      <button class="btn btn-outline" style="margin-top:1.5rem;" onclick="renderQuiz()">🔄 إعادة المحاولة</button>
    </div>
  `;
}
