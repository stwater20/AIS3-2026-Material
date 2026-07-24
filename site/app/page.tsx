const repositoryUrl = "https://github.com/stwater20/AIS3-2026-Material";

const courses = [
  {
    chapter: "01",
    date: "7.22 WED",
    time: "15:30 — 16:30",
    signal: "REFUSAL / BYPASS",
    title: "模型為何開口，\n又為何選擇沉默",
    line: "一場關於表徵、控制與拒答邊界的拆解。",
    tone: "voice",
    links: [
      { label: "閱讀課堂筆記", href: "https://sectools.tw/archives/1772" },
      {
        label: "開啟 Lab 01",
        href: `${repositoryUrl}/blob/main/Lab1_ActivationSteering.ipynb`,
      },
    ],
  },
  {
    chapter: "02",
    date: "7.23 THU",
    time: "13:30 — 14:30",
    signal: "TOOLS / AGENCY",
    title: "當代理者\n被授予工具",
    line: "當推理開始碰觸真實世界，權限就是新的攻擊面。",
    tone: "agent",
    links: [
      { label: "閱讀課堂筆記", href: "https://sectools.tw/archives/1777" },
      {
        label: "開啟 Lab 02",
        href: `${repositoryUrl}/blob/main/Lab2_AgentSecurity.ipynb`,
      },
    ],
  },
  {
    chapter: "03",
    date: "7.24 FRI",
    time: "09:00 — 10:00",
    signal: "ANSWER / TRUTH",
    title: "在答案\n成為真相以前",
    line: "答案可以被生成，真相必須被驗證。",
    tone: "truth",
    links: [
      { label: "閱讀課堂筆記", href: "https://sectools.tw/archives/1780" },
      {
        label: "開啟 Lab 03",
        href: `${repositoryUrl}/blob/main/Lab3_LLM_Eval_and_Security.ipynb`,
      },
    ],
  },
] as const;

export default function Home() {
  return (
    <main className="site-shell">
      <div className="space-field" aria-hidden="true">
        <span className="stars stars-a" />
        <span className="stars stars-b" />
        <span className="signal-beam" />
      </div>

      <nav className="nav-shell" aria-label="主要導覽">
        <a className="brand" href="#top" aria-label="回到首頁">
          <span className="brand-mark" aria-hidden="true">✦</span>
          <span className="brand-lockup">
            <span>AIS3 / 2026</span>
            <strong>AI 資安應用實作與模型安全</strong>
          </span>
        </a>
        <div className="nav-links">
          <a href="#route">場次</a>
          <a href="#courses">課程</a>
          <a href="#star">按星星</a>
        </div>
        <a
          className="nav-repo"
          href={repositoryUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>INTELLIGENCE PATH</span>
            <span>JUL 22—24 · TAIWAN</span>
          </p>
          <h1>
            <span>模型開口，</span>
            <strong>誰決定真相？</strong>
          </h1>
          <p className="hero-lead">
            三堂課，從模型為何說話、代理者如何行動，
            <br />一路前往答案被相信以前的最後一道邊界。
          </p>
          <div className="hero-actions">
            <a
              className="action action-primary"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="action-star" aria-hidden="true">★</span>
              幫 Repository 按星星
              <span aria-hidden="true">↗</span>
            </a>
            <a className="action action-ghost" href="#courses">
              查看課程 <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-meta" aria-label="活動資訊">
            <span className="status-light" aria-hidden="true" />
            <span>AIS3 2026 · COURSE MATERIAL ARCHIVE</span>
            <span className="meta-code">SSCHEN / 0722—0724</span>
          </div>
        </div>

        <div className="orbit-stage" aria-label="AIS3 2026 三場課程">
          <div className="orbit-halo orbit-halo-a" aria-hidden="true" />
          <div className="orbit-halo orbit-halo-b" aria-hidden="true" />
          <div className="orbit-axis" aria-hidden="true" />
          <div className="orbit-core">
            <span className="core-star" aria-hidden="true">✦</span>
            <span className="core-label">AIS3</span>
            <strong>2026</strong>
            <small>THREE QUESTIONS / THREE SESSIONS</small>
          </div>
          <div className="orbit-node node-one">
            <span>01</span>
            <small>REFUSAL</small>
          </div>
          <div className="orbit-node node-two">
            <span>02</span>
            <small>AGENCY</small>
          </div>
          <div className="orbit-node node-three">
            <span>03</span>
            <small>TRUTH</small>
          </div>
          <div className="orbit-caption orbit-caption-top">SIGNAL ACQUIRED</div>
          <div className="orbit-caption orbit-caption-bottom">SESSION 01—03 / AIS3-26</div>
        </div>
      </section>

      <section className="route-manifest" id="route">
        <div className="manifest-number">03</div>
        <div className="manifest-copy">
          <p className="section-kicker">COURSE OVERVIEW / 課程概覽</p>
          <h2>說話。行動。相信。</h2>
        </div>
        <p>
          語言模型不只生成答案。它決定何時開口、拿什麼行動，
          最後又讓誰相信。這三堂課，把同一條風險鏈拆成三個節點。
        </p>
        <div className="manifest-coordinates" aria-hidden="true">
          25.0330° N<br />121.5654° E
        </div>
      </section>

      <section className="courses-section" id="courses">
        <header className="section-heading">
          <div>
            <p className="section-kicker">COURSE SEQUENCE / 課程序列</p>
            <h2>三場課程</h2>
          </div>
          <p>每一站，都比上一站更接近真實世界。</p>
        </header>

        <div className="course-track">
          {courses.map((course) => (
            <article className={`course-card course-${course.tone}`} key={course.chapter}>
              <div className="chapter-rail" aria-hidden="true">
                <span>CHAPTER</span>
                <strong>{course.chapter}</strong>
              </div>
              <div className="course-date">
                <span>{course.date}</span>
                <strong>{course.time}</strong>
              </div>
              <div className="course-body">
                <p className="course-signal">{course.signal}</p>
                <h3>
                  {course.title.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p className="course-line">{course.line}</p>
                {"status" in course ? (
                  <p className="course-status">{course.status}</p>
                ) : null}
                <div className="course-links">
                  {course.links.length ? (
                    course.links.map((link) => (
                      <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))
                  ) : (
                    <span className="coming-soon">MATERIAL IN TRANSIT · 敬請期待</span>
                  )}
                </div>
              </div>
              <div className="course-emblem" aria-hidden="true">
                <span>{course.chapter}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="signal-spectrum" aria-label="三堂課的核心主題">
        <div className="spectrum-item">
          <span className="spectrum-index">I</span>
          <p>REFUSAL</p>
          <strong>模型如何拒絕，又如何被繞過</strong>
        </div>
        <div className="spectrum-item">
          <span className="spectrum-index">II</span>
          <p>AGENCY</p>
          <strong>工具如何放大意圖</strong>
        </div>
        <div className="spectrum-item">
          <span className="spectrum-index">III</span>
          <p>TRUTH</p>
          <strong>答案如何取得信任</strong>
        </div>
      </section>

      <section className="star-section" id="star">
        <div className="star-burst" aria-hidden="true">
          <span>★</span>
        </div>
        <div className="star-copy">
          <p className="section-kicker">SUPPORT THE ARCHIVE</p>
          <h2>這趟旅程，<br />需要你的一顆星。</h2>
          <p>
            如果教材對你有幫助，歡迎到 GitHub 幫這個 Repository 按下 Star。
            每一顆星，都是讓內容繼續整理、更新與公開的推進器。
          </p>
          <a
            className="star-button"
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">★</span>
            前往 GitHub 點亮星星
            <span aria-hidden="true">↗</span>
          </a>
          <code>github.com/stwater20/AIS3-2026-Material</code>
        </div>
      </section>

      <footer>
        <div>
          <span className="footer-mark" aria-hidden="true">✦</span>
          <span>AIS3 2026 COURSE MATERIALS</span>
        </div>
        <p>Dr. Sheng-Shan Chen · 陳勝舢博士</p>
        <div className="footer-links">
          <a href="https://sectools.tw/" target="_blank" rel="noreferrer">SecTools.tw ↗</a>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </main>
  );
}
