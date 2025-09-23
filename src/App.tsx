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
          <a href="#dashboard" className="font-semibold">{translate('เรซูเม่', 'My Resume')}</a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#dashboard">{translate('หน้าแรก', 'Home')}</a>
            <a href="#skills">{translate('ทักษะ', 'Skills')}</a>
            <a href="#projects">{translate('โปรเจกต์', 'Projects')}</a>
            <a href="#certificates">{translate('ประกาศนียบัตร', 'Certificates')}</a>
            <a href="#contact">{translate('ติดต่อ', 'Contact')}</a>
          </div>
          <div className="flex items-center gap-3 ml-3 md:ml-6">
            <div role="group" aria-label="Language selector" className="flex gap-1">
              <button
                type="button"
                className={`text-sm border px-2 py-1 rounded ${language === 'TH' ? 'bg-neutral-200 dark:bg-neutral-800' : ''}`}
                onClick={() => setLanguage('TH' as any)}
                aria-pressed={language === 'TH'}
              >
                TH
              </button>
              <button
                type="button"
                className={`text-sm border px-2 py-1 rounded ${language === 'EN' ? 'bg-neutral-200 dark:bg-neutral-800' : ''}`}
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
        {/* Dashboard Layout */}
        <section id="dashboard" className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Avatar card */}
            <div className="md:col-span-1 bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <div className="rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 aspect-square max-h-64 mx-auto flex items-center justify-center">
                <img src={profileImg} alt={translate('รูปโปรไฟล์', 'Profile photo')} className="w-full h-full object-cover" />
              </div>

              {/* Name Header */}
              <div className="text-center mt-4">
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  {translate('วายุ แก้วประวัติ', 'Wayu Kaewparwat')}
                </h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {translate('นิสิตชั้นปี 4 มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสนคณะศิลปศาสตร์และวิทยาศาสตร์ สาขาเทคโนโลยีสารสนเทศ', '4th Year student at Kasetsart University, Kamphaeng Saen Campus, Faculty of Liberal Arts and Science, majoring in Information Technology.')}
                </p>
              </div>
            </div>

            {/* Summary + Interests */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-4 md:p-5 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <p className="text-sm md:text-base text-neutral-800 dark:text-neutral-200">
                  {translate(
                    'นิสิตชั้นปี 4 มหาวิยาลัยเกษตรศาสตร์วิทยาเขตกำแพงแสน สาขาเทคโนโลยีสารสารสนเทศกำลังมองหาที่ฝึกประสบการณ์ทางด้านสารสนเทศ โดยต้องการเรียนรู้เทคโนโลยีใหม่ ๆ และรูปแบบการทำงานที่หลากหลายพร้อมรับความท้าทายที่เข้ามาเพื่อพัฒนาขีดความสามารถของตนเอง ให้มีความพร้อมในงานทำงานจริงต่อไป',
                    'A fourth-year student at Kasetsart University, Kamphaeng Saen Campus, majoring in Information Technology, seeking an internship opportunity in the field of information technology. Eager to learn new technologies and diverse working methods, and ready to embrace challenges to further develop skills and prepare for real-world professional work.'
                  )}
                </p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-4 md:p-5 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="text-sm font-medium mb-3 text-neutral-700 dark:text-neutral-300">{translate('ความสนใจ', 'Interests')}</div>
                <div className="flex flex-wrap gap-2">
                  {['React + Vite', 'Tailwind CSS', 'Selenium', 'Docker'].map((it) => (
                    <span key={it} className="px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <section id="skills" className="scroll-mt-10 py-16">

            {/* Group card */}
            <div className="mt-6 bg-slate-50 dark:bg-neutral-900 p-5 rounded-2xl border border-slate-200 dark:border-neutral-700">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-slate-700 dark:text-white">{translate('ภาพรวมทักษะ', 'Skills Overview')}</div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Programming Languages */}
                <div className="p-4 rounded-lg border border-slate-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-950/40">
                  <h3 className="text-sm font-semibold mb-3 text-slate-700 dark:text-purple-400">
                    {translate('ภาษาโปรแกรมมิ่ง', 'Programming Languages')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'Node'].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-slate-100 dark:bg-purple-900 text-slate-700 dark:text-purple-200 text-sm rounded-full border border-slate-200 dark:border-purple-700">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks & Libraries */}
                <div className="p-4 rounded-lg border border-slate-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-950/40">
                  <h3 className="text-sm font-semibold mb-3 text-slate-700 dark:text-blue-400">
                    {translate('เฟรมเวิร์ก & ไลบรารี', 'Frameworks & Libraries')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['React + Vite', 'Tailwind CSS', 'Vue', 'Express', 'Next.Js', 'Prisma', 'Bootstrap'].map((framework) => (
                      <span key={framework} className="px-3 py-1 bg-slate-100 dark:bg-blue-900 text-slate-700 dark:text-blue-200 text-sm rounded-full border border-slate-200 dark:border-blue-700">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Automation & Testing */}
                <div className="p-4 rounded-lg border border-slate-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-950/40">
                  <h3 className="text-sm font-semibold mb-3 text-slate-700 dark:text-green-400">
                    {translate('ออโตเมชัน & การทดสอบ', 'Automation & Testing')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Selenium (Automated Testing)', 'Black box & White box Testing', 'Testcase Design'].map((item) => (
                      <span key={item} className="px-3 py-1 bg-slate-100 dark:bg-green-900 text-slate-700 dark:text-green-200 text-sm rounded-full border border-slate-200 dark:border-green-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Platforms */}
                <div className="p-4 rounded-lg border border-slate-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-950/40">
                  <h3 className="text-sm font-semibold mb-3 text-slate-700 dark:text-orange-400">
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

                {/* Concepts & Principles */}
                <div className="p-4 rounded-lg border border-slate-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-950/40">
                  <h3 className="text-sm font-semibold mb-3 text-slate-700 dark:text-pink-400">
                    {translate('แนวคิด & หลักการ', 'Concepts & Principle')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Object-Oriented Programming (OOP)'].map((item) => (
                      <span key={item} className="px-3 py-1 bg-slate-100 dark:bg-pink-900 text-slate-700 dark:text-pink-200 text-sm rounded-full border border-slate-200 dark:border-pink-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="p-4 rounded-lg border border-slate-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-950/40">
                  <h3 className="text-sm font-semibold mb-3 text-slate-700 dark:text-emerald-400">
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
            </div>
          </section>

          {/* Projects group card */}
          <div className="mt-4 md:mt-6 bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-4 md:p-5 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{translate('ผลงาน', 'Projects')}</h3>
              <span className="text-sm text-neutral-500">{translate('อัปเดตล่าสุด', 'Latest updates')}</span>
            </div>


            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((p, i) => (
                <div key={i} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/60 dark:bg-neutral-950/40">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-neutral-900 dark:text-white">{translate(p.titleTh, p.titleEn)}</div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{translate(p.descTh, p.descEn)}</p>
                  <div className="mt-3">
                    <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm underline text-blue-600 dark:text-blue-400">
                      GitHub ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <section id="certificates" className="scroll-mt-10 py-16 border-t border-neutral-200 dark:border-neutral-800">
            <div className="mt-4 md:mt-6 bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-4 md:p-5 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{translate('ประกาศนียบัตร', 'Certificates')}</h3>
              </div>


              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert, idx) => {
                  const encoded = encodeURI(cert.file);
                  return (
                    <div key={idx} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-0 bg-white/60 dark:bg-neutral-950/40 overflow-hidden">
                      <div className="w-full aspect-[16/9] overflow-hidden">
                        <img src={encoded} alt={cert.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-3">
                        <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200 text-center">
                          {cert.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-4 md:p-5 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{translate('กิจกรรม', 'Activity ')}</div>
            <div className="flex flex-wrap gap-2">
              {['หลักสูตร เปิดโลกทักษะ AI และความปลอดภัยทางไซเบอร์', 'หลักสูตร Automates Testing', 'หลักสูตรเก็บความต้องการของระบบ', 'หลักสูตร Oracle Course', 'หลักสูตร Fullstack developer (Next.Js)'].map((it) => (
                <span key={it} className="px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm">
                  {it}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <section id="contact" className="scroll-mt-10 py-16 border-t border-neutral-200 dark:border-neutral-800">
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-4 md:p-5 border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <div className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{translate('ช่องทางการติดต่อ', 'Contact Channels')}</div>
              <div className="flex flex-wrap gap-2">
                <a href="mailto:wayu.ka@ku.th" className="px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-sm underline">✉️ wayu.ka@ku.th</a>
                <a href="tel:0939267977" className="px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-sm underline">📞 093-9267-977</a>
                <a href="https://github.com/wayu678" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-sm underline">GitHub ↗</a>
                <a href={`${import.meta.env.BASE_URL}${encodeURIComponent('Resume_วายุ_EN.pdf')}`} download="Resume_Wayu_EN.pdf" className="px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-sm underline">{translate('ดาวน์โหลดเรซูเม่', 'Download Resume')}</a>
              </div>
            </div>
          </section>
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