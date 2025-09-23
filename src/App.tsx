import { ThemeToggle } from "./components/ThemeToggle";
import { useContext } from "react";
import { TranslateContext } from "./contexts/translate.context.ts";
import profileImg from "./assets/profile.jpg";

function App() {
  const { language, setLanguage, translate } = useContext(TranslateContext);

  const certificates = [
    { name: "CSS Certificate", file: "Certificate 1.jpg" },
    { name: "JavaScript Basic Certificate", file: "Certificate 2.jpg" },
    { name: "SQL Basic Certificate", file: "Certificate 3.jpg" },
    { name: "SQL Intermediate Certificate", file: "Certificate 4.jpg" },
  ];

  // const resumeFile = encodeURI('/Resume_วายุ_EN.pdf');

  const projects = [
    {
      titleTh: "Automated-Testing",
      titleEn: "Automated-Testing",
      descTh: "การทำ Automated Testing ด้วย Selenium Robot framework ",
      descEn: "Workshop on Automated Testing with Selenium Robot Framework",
      repo: "https://github.com/wayu678/Automated-Testing",
    },
    {
      titleTh: "login_system",
      titleEn: "login_system",
      descTh: "ทำระบบล็อกอินด้วย Next.js และยืนยันตัวตนด้วย JWT",
      descEn: "Built a login system with Next.js and authentication using JWT.",
      repo: "https://github.com/wayu678/login_system",
    },
    {
      titleTh: "Frontend-API-Integration-Project",
      titleEn: "Frontend-API-Integration-Project",
      descTh: "การสร้าง API และนำมาใช้ในฝั่ง Frontend",
      descEn: "Building an API and integrating it on the Frontend.",
      repo: "https://github.com/wayu678/Frontend-API-Integration-Project",
    },
    {
      titleTh: "kubernetes101",
      titleEn: "kubernetes101",
      descTh: "การใช้งาน Kubernetes เพื่อให้ระบบมีความทนทานและสามารถจัดการ container อัตโนมัติ",
      descEn: "Implemented Kubernetes to ensure system resilience, automatically restarting or migrating containers to other nodes in case of failure.",
      repo: "https://github.com/wayu678/kubernetes101",
    },
  ];

  return (
    <div className="min-h-dvh bg-white text-black dark:bg-black dark:text-white transition-colors duration-200">

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 dark:border-neutral-800 backdrop-blur">
        <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <a href="#home" className="font-semibold">{translate('เรซูเม่', 'My Resume')}</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about">{translate('ข้อมูลส่วนตัว', 'Profile')}</a>
            <a href="#projects">{translate('โปรเจกต์', 'Projects')}</a>
            <a href="#skills">{translate('ทักษะ', 'Skills')}</a>
            <a href="#certificates">{translate('ประกาศนียบัตร', 'Certificates')}</a>
            <a href="#contact">{translate('ติดต่อ', 'Contact')}</a>
          </div>
          <div className="flex items-center gap-3 ml-3 md:ml-6">
            <div role="group" aria-label="Language selector" className="flex gap-1">
              <button
                type="button"
                className={`text-xs border px-2 py-1 rounded ${language === 'TH' ? 'bg-neutral-200 dark:bg-neutral-800' : ''}`}
                onClick={() => setLanguage('TH' as any)}
                aria-pressed={language === 'TH'}
              >
                TH
              </button>
              <button
                type="button"
                className={`text-xs border px-2 py-1 rounded ${language === 'EN' ? 'bg-neutral-200 dark:bg-neutral-800' : ''}`}
                onClick={() => setLanguage('EN' as any)}
                aria-pressed={language === 'EN'}
              >
                EN
              </button>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>



      <main className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <section id="home" className="min-h-[70dvh] flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            {/* Profile */}
            <div className="flex justify-center md:justify-start">
              <div className="rounded-full overflow-hidden h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72 ring-2 ring-white dark:ring-neutral-900 shadow-lg">
                <img src={profileImg} alt={translate('รูปโปรไฟล์', 'Profile photo')} className="h-full w-full object-cover" />
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold mt-2">{translate('วายุ แก้วประวัติ', 'Wayu kaewparwat')}</h1>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                {translate(
                  'นิสิตชั้นปี 4 มหาวิยาลัยเกษตรศาสตร์วิทยาเขตกำแพงแสน สาขาเทคโนโลยีสารสารสนเทศกำลังมองหาที่ฝึกประสบการณ์ทางด้านสารสนเทศ โดยต้องการเรียนรู้เทคโนโลยีใหม่ ๆ และรูปแบบการทำงานที่หลากหลายพร้อมรับความท้าทายที่เข้ามาเพื่อพัฒนาขีดความสามารถของตนเอง ให้มีความพร้อมในงานทำงานจริงต่อไป ',
                  'A fourth-year student at Kasetsart University, Kamphaeng Saen Campus, majoring in Information Technology, seeking an internship opportunity in the field of information technology. Eager to learn new technologies and diverse working methods, and ready to embrace challenges to further develop skills and prepare for real-world professional work.'
                )}
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#contact"
                  className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 text-sm flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {translate('ติดต่อฉัน', 'Contact Me')}
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}${encodeURIComponent('Resume_วายุ_EN.pdf')}`}
                  download="Resume_Wayu_EN.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 text-sm flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"

                >
                  {translate('เรซูเม่', 'Resume')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-6-4v8m0 0l-4-4m4 4l4-4M12 4v12" />
                  </svg>
                </a>
                <a
                  href="https://github.com/wayu678"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 text-sm flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  GitHub
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-10 py-16">
          <h2 className="text-2xl font-semibold">{translate('ข้อมูลส่วนตัว', 'Profile')}</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'วันเกิด : 23 เมษายน 2546',
              'Date of brith : 23 April 2003'
            )}
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'อายุ : 22 ปี',
              'Age : 22 years'
            )}
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'ส่วนสูง : 176 เซนติเมตร',
              'Height : 176 cm.'
            )}
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'ส่วนสูง : 51 กิโลกรัม',
              'Weight : 51 kg.'
            )}
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'ที่อยู่ : 50 ถนนรถไฟตะวันตก ซอยทางรถไฟตะวันตก 3 ตำบลนครปฐม อำเภอเมือง จังหวัดนครปฐม 73000 ประเทศไทย',
              'Address : 50 Tawan Tok Road,Soi Thang Rotfai Tawan Tok 3,Nakhon Pathom Subdistrict, Mueang Nakhon Pathom District,Nakhon Pathom 73000, Thailand'
            )}
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'สัญชาติ : ไทย',
              'Nationality : Thai'
            )}
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'ภาระผูกผันทางทหาร : สำเร็จการฝึกวิชาทหารชั้นปีที่ 3 ',
              'Military Service Status: Completed Territorial Defense Student Training (equivalent to Military Training, Year 3)'
            )}
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-10 py-16 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-semibold">{translate('โปรเจกต์', 'Projects')}</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-neutral-900 p-4 rounded-lg border border-slate-200 dark:border-neutral-700 flex flex-col">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  {translate(p.titleTh, p.titleEn)}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-neutral-300 flex-1">
                  {translate(p.descTh, p.descEn)}
                </p>
                <div className="mt-4">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md bg-slate-800 text-white hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                  >
                    <span>GitHub</span>
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-10 py-16">
          <h2 className="text-2xl font-semibold">{translate('ทักษะ', 'Skills')}</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div className="bg-slate-50 dark:bg-neutral-900 p-4 rounded-lg border border-slate-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-3 text-slate-700 dark:text-purple-400">
                {translate('ภาษาโปรแกรมมิ่ง', 'Programming Languages')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['C++', , 'Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'SQL'].map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-slate-100 dark:bg-purple-900 text-slate-700 dark:text-purple-200 text-sm rounded-full border border-slate-200 dark:border-purple-700">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-slate-50 dark:bg-neutral-900 p-4 rounded-lg border border-slate-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-3 text-slate-700 dark:text-blue-400">
                {translate('เฟรมเวิร์ก & ไลบรารี', 'Frameworks & Libraries')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React + Vite', 'Tailwind CSS', 'Vue'].map((framework) => (
                  <span key={framework} className="px-3 py-1 bg-slate-100 dark:bg-blue-900 text-slate-700 dark:text-blue-200 text-sm rounded-full border border-slate-200 dark:border-blue-700">
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            {/* Automation & Testing */}
            <div className="bg-slate-50 dark:bg-neutral-900 p-4 rounded-lg border border-slate-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-3 text-slate-700 dark:text-green-400">
                {translate('ออโตเมชัน & การทดสอบ', 'Automation & Testing')}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-green-900 text-slate-700 dark:text-green-200 text-sm rounded-full border border-slate-200 dark:border-green-700">
                  Selenium (Automated Testing)
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-green-900 text-slate-700 dark:text-green-200 text-sm rounded-full border border-slate-200 dark:border-green-700">
                  Black box & White box Testing
                </span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-green-900 text-slate-700 dark:text-green-200 text-sm rounded-full border border-slate-200 dark:border-green-700">
                  Testcase Design
                </span>
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-slate-50 dark:bg-neutral-900 p-4 rounded-lg border border-slate-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-3 text-slate-700 dark:text-orange-400">
                {translate('เครื่องมือ & แพลตฟอร์ม', 'Tools & Platforms')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git (command-line)', 'Figma (UI/UX Design)', 'Power BI (Data Analytics)', 'Docker', 'Unity 2D/3D'].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-slate-100 dark:bg-orange-900 text-slate-700 dark:text-orange-200 text-sm rounded-full border border-slate-200 dark:border-orange-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Concepts & Paradigms */}
            <div className="bg-slate-50 dark:bg-neutral-900 p-4 rounded-lg border border-slate-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-3 text-slate-700 dark:text-pink-400">
                {translate('แนวคิด & หลักการ', 'Concepts & Principle')}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-pink-900 text-slate-700 dark:text-pink-200 text-sm rounded-full border border-slate-200 dark:border-pink-700">
                  Object-Oriented Programming (OOP)
                </span>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-slate-50 dark:bg-neutral-900 p-4 rounded-lg border border-slate-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold mb-3 text-slate-700 dark:text-emerald-400">
                {translate('ภาษา', 'Languages')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  translate('ไทย (เจ้าของภาษา)', 'Thai (Native)'),
                  translate('อังกฤษ (การอ่านและการเขียนทางเทคนิคระดับกลาง)', 'English ( Intermediate Technical Reading & Writing)'),
                ].map((lang) => (
                  <span key={lang as unknown as string} className="px-3 py-1 bg-slate-100 dark:bg-emerald-900 text-slate-700 dark:text-emerald-200 text-sm rounded-full border border-slate-200 dark:border-emerald-700">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Certificates */}
        <section id="certificates" className="scroll-mt-10 py-16 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-semibold">{translate('ประกาศนียบัตร & การอบรม', 'Certificates & Training')}</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, idx) => {
              const encoded = encodeURI(cert.file);
              return (
                <div key={idx} className="border border-neutral-200 dark:border-neutral-800 rounded overflow-hidden bg-white/50 dark:bg-neutral-900/50">
                  <div className="w-full aspect-[16/9] overflow-hidden">
                    <img
                      src={encoded}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2 text-center text-xs text-neutral-600 dark:text-neutral-400">
                    {cert.name}
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="text-2xl font-semibold">{translate('กิจกรรม & การอบรมอื่น ๆ ที่เคยเข้ารวม', 'Additional Activities & Trainings')}</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'หลักสูตร เปิดโลกทักษะ AI และความปลอดภัยทางไซเบอร์',
              'AI Skills and Cybersecurity'
            )}
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'หลักสูตร Automates Testing',
              'Automates Testing'
            )}
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'หลักสูตรเก็บความต้องการของระบบ ',
              'Get requiment workshop'
            )}
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            {translate(
              'หลักสูตร Oracle Course ',
              'Oracle Course '
            )}
          </p>
        </section>

        {/* Contact */}

        <section id="contact" className="scroll-mt-10 py-16 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-semibold">{translate('ติดต่อ', 'Contact')}</h2>
          <p className="mt-4">
            {translate('สนใจร่วมงานหรือติดต่อได้ทางอีเมลหรือเบอร์โทรศัพท์', "If you're interested in working together, contact me via email or phone")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a href="mailto:wayu.ka@ku.th" className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 transition">
              ✉️ {translate('ส่งอีเมล', 'Email')}
            </a>
            <a href="tel:0939267977" className="flex items-center gap-2 px-4 py-2 rounded bg-green-600 text-white text-sm hover:bg-green-700 transition">
              📞 {translate('โทรติดต่อ', 'Call')}
            </a>
            <div className="px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300">
              Email: <a href="mailto:wayu.ka@ku.th" className="underline hover:text-blue-600">wayu.ka@ku.th</a><br />
              Tel: <a href="tel:0954121064" className="underline hover:text-green-600">093-9267-977</a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
        Email: <a href="mailto:wayu.ka@ku.th" className="underline hover:text-blue-600">wayu.ka@ku.th</a> | Tel: <a href="tel:093-9267-977" className="underline hover:text-green-600">093-9267-977</a>
      </footer>
    </div>
  );
}

export default App;