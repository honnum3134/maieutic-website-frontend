/* ─── Blog content ───────────────────────────────────────────────────────
 * Every article on /resources/blogs-insights lives here. The listing page
 * reads the summary fields; /resources/blogs-insights/:slug renders `body`.
 *
 * Body block types (see BlogPostPage.jsx → renderBlock):
 *   { type: 'lede',    text }                       opening paragraph, larger
 *   { type: 'p',       text }                       **bold** is supported
 *   { type: 'h2',      text, kicker? }              kicker = small label above
 *   { type: 'h3',      text }
 *   { type: 'ul' | 'ol', items: [text] }
 *   { type: 'quote',   text, cite? }
 *   { type: 'callout', title, text, tone?: 'warm' }
 *   { type: 'figure',  src, alt, caption? }
 *   { type: 'table',   head: [], rows: [[]] }
 *   { type: 'stats',   items: [{ value, label }] }
 *   { type: 'cards',   items: [{ title, text }] }
 *   { type: 'faq',     items: [{ q, a }] }
 *
 * Reading time is computed from the body, so it never needs updating by hand.
 */

import { serviceBlogs } from './blogs-services';

export const AUTHOR = {
  name: 'Maieutic Edutech Team',
  initials: 'ME',
  bio: 'Instructional designers, academic delivery specialists and learning technologists writing about what actually works in education.',
};

const editorialBlogs = [
  /* ────────────────────────────────────────────────────────────────────── */
  {
    slug: 'the-science-of-why-traditional-studying-fails',
    tag: 'Learning Science',
    title: 'The Science of Why Traditional Studying Fails',
    subtitle: 'What every student needs to know about active recall, spaced repetition, and smarter study techniques.',
    excerpt: 'Highlighting, re-reading, and cramming feel productive — but the evidence says otherwise. We break down what cognitive science actually tells us about effective learning and what that means for how we design content.',
    date: 'Jul 2026',
    dateISO: '2026-07-21',
    cover: '/images/blogs/traditional-studying-cover.webp',
    coverAlt: 'Students working at their desks in a classroom',
    keywords: ['Active Recall', 'Spaced Repetition', 'Cognitive Science', 'Study Techniques', 'Forgetting Curve'],
    body: [
      { type: 'lede', text: '"I studied for hours, but I forgot everything after the exam." It\'s a frustration shared by students across schools, universities, and competitive examinations. Many spend countless hours highlighting textbooks, rereading notes, and memorising facts, believing that more time spent studying automatically leads to better results. Yet days or even hours after an exam, much of that information seems to disappear.' },
      { type: 'p', text: 'If this sounds familiar, the problem may not be a lack of effort — it may be your study techniques.' },
      { type: 'p', text: 'For decades, traditional study methods have been built around repetition. Students are encouraged to read chapters multiple times, underline important points, and revise everything just before an examination. These habits feel productive because they create a sense of familiarity with the material. However, decades of research in cognitive psychology and neuroscience suggest that **familiarity is not the same as learning**.' },
      { type: 'p', text: 'Modern learning science paints a very different picture. Rather than simply absorbing information, the brain learns by actively retrieving knowledge, making connections between ideas, and strengthening neural pathways through repeated practice over time. In other words, effective learning depends less on how long we study and more on how we study — the core idea behind the Maieutic approach to learning.' },
      { type: 'p', text: 'This shift in understanding has transformed educational research over the past few decades. Scientists now know that many popular study habits persist not because they are effective, but because they feel effective. The challenge is that our intuition about learning is often misleading.' },

      { type: 'h2', text: 'The Illusion of Learning' },
      { type: 'p', text: 'Imagine reading the same chapter three times before an examination. By the third reading, the content feels familiar. The definitions seem recognisable, the diagrams look obvious, and you begin to feel confident that you have mastered the topic.' },
      { type: 'p', text: 'Then the exam begins. Without the textbook in front of you, the answers suddenly become difficult to recall.' },
      { type: 'p', text: 'This experience illustrates one of the most common misconceptions in education: the illusion of learning. When students repeatedly reread notes or highlight large sections of a textbook, the material becomes easier to recognise. Psychologists refer to this as **processing fluency**. Because the information is processed more easily, learners often mistake familiarity for genuine understanding. However, recognising information on a page is very different from retrieving it independently from memory — the essence of active recall.' },
      { type: 'p', text: 'Research consistently shows that passive study strategies such as rereading and highlighting produce relatively small improvements in long-term retention. They create confidence, but that confidence is often misplaced because the brain has not been challenged to retrieve the information without support.' },
      { type: 'p', text: 'Learning begins when the brain is forced to work. Every successful attempt to recall information strengthens the neural pathways associated with that memory, making future retrieval faster and more reliable. Simply seeing the information again does not produce the same effect.' },
      { type: 'callout', title: 'A better question', text: 'Students often ask, "Does this look familiar?" A more useful question is, "Can I explain this without looking at my notes?" The first measures recognition; the second measures real understanding.' },

      { type: 'h2', text: 'Why the Brain Naturally Forgets' },
      { type: 'p', text: 'Forgetting is often viewed as a sign of poor learning, but in reality, it is a normal function of the human brain. Every day we encounter far more information than we can permanently remember, so the brain continuously filters what is important and gradually discards what it considers unnecessary.' },
      { type: 'p', text: 'One of the earliest scientists to study this process was the German psychologist Hermann Ebbinghaus. Through a series of memory experiments, he developed what is now known as the **Forgetting Curve**, demonstrating that newly learned information fades rapidly if it is not revisited.' },
      { type: 'p', text: 'The pattern is surprisingly consistent. Shortly after learning something new, memory begins to decline. Within days, much of the information may be forgotten unless the learner actively reviews it. This is why students who rely solely on cramming often feel confident immediately after studying but struggle to remember the same material a week later.' },
      { type: 'p', text: 'Fortunately, forgetting is not inevitable. Each time we successfully retrieve information from memory, the memory trace becomes stronger and more resistant to forgetting. Rather than fighting against the brain\'s natural processes, effective study techniques work with them by scheduling review sessions before memories fade completely.' },
      { type: 'p', text: 'In this sense, forgetting is not the enemy of learning — it is part of the learning process itself. The key is knowing when and how to reinforce knowledge before it disappears.' },

      { type: 'h2', text: 'Why Cramming Feels Effective but Isn\'t' },
      { type: 'figure', src: '/images/blogs/traditional-studying-library.webp', alt: 'A student surrounded by open books in a library', caption: 'Spaced repetition — reviewing material over days or weeks — beats last-minute exam cramming.' },
      { type: 'p', text: 'Few study habits are as common as cramming. Faced with an upcoming examination, students often spend long hours revising an entire syllabus in a single sitting, believing that intense effort will compensate for weeks of limited preparation. While this approach may help recall information during the next day\'s exam, its benefits rarely last beyond the short term.' },
      { type: 'p', text: 'Cramming relies on **massed practice**, where large amounts of information are learned within a short period. Because the material remains active in short-term memory, students often experience a temporary boost in confidence and performance. However, without repeated retrieval and spaced review, these memories fade quickly.' },
      { type: 'p', text: 'Cognitive psychologists have consistently demonstrated that learning is far more durable when study sessions are distributed over time. This principle, known as the **Spacing Effect**, allows the brain to strengthen memories gradually through repeated retrieval rather than relying on temporary familiarity.' },
      { type: 'p', text: 'Sleep also plays a critical role. During sleep, the brain consolidates newly learned information, transferring it from temporary storage into more stable long-term memory. Students who sacrifice sleep to study through the night may unintentionally reduce their ability to retain what they have just learned.' },
      { type: 'p', text: 'The goal of studying should not be to remember information for a single examination, but to retain it long enough to apply it in future learning and real-world situations. Cramming may help with the first objective, but it is remarkably poor at achieving the second.' },

      { type: 'h2', text: 'Passive Learning vs. Active Learning' },
      { type: 'p', text: 'Most students spend far more time putting information into their brains than taking it back out.' },
      { type: 'p', text: 'Reading a chapter again. Watching another lecture. Highlighting another page. These activities feel productive because they keep us engaged with the material. Yet they all have one thing in common: they are largely passive.' },
      { type: 'p', text: 'Passive learning focuses on exposure. The learner repeatedly encounters information but is rarely required to retrieve it independently. As a result, studying feels easier, but long-term retention remains surprisingly weak.' },
      { type: 'p', text: 'Active learning works differently. Instead of repeatedly seeing information, students are challenged to recall it without looking at their notes. Every successful retrieval strengthens memory, making future recall faster and more reliable.' },
      { type: 'p', text: 'This principle, known as **retrieval practice**, has become one of the most consistently supported findings in educational psychology. Rather than asking, "Have I read this before?", effective learners ask, "Can I explain this from memory?"' },
      { type: 'quote', text: 'That small change transforms studying from passive review into active learning — and it\'s exactly the habit Maieutic helps students build.' },

      { type: 'h2', text: 'How the Brain Actually Learns' },
      { type: 'p', text: 'Learning is often imagined as filling a container with information. In reality, the brain works much more like a network than a storage box.' },
      { type: 'p', text: 'Every new concept creates connections between neurons. The more frequently those connections are activated through meaningful retrieval and application, the stronger they become. Neuroscientists refer to this process as **synaptic plasticity**, the brain\'s ability to strengthen neural pathways through repeated use.' },
      { type: 'p', text: 'However, the brain has an important limitation: working memory. Working memory is where we temporarily process new information. It can only handle a limited amount at once. When students attempt to memorise an entire chapter in a single sitting, working memory quickly becomes overloaded, making learning slower and increasing the likelihood of forgetting.' },
      { type: 'p', text: 'This idea forms the foundation of **Cognitive Load Theory**, proposed by educational psychologist John Sweller. The theory suggests that learning is most effective when information is presented in manageable chunks rather than overwhelming learners with excessive content. In other words, the brain learns more efficiently when complexity is introduced gradually, allowing new knowledge to connect with existing understanding.' },

      { type: 'h2', text: 'The Science Behind Better Study Techniques' },
      { type: 'p', text: 'If traditional study methods often fail, what does decades of research suggest students should do instead? Rather than relying on intuition, learning scientists have identified several evidence-based study techniques that consistently improve long-term retention and understanding — the same techniques built into the Maieutic learning method:' },
      { type: 'cards', items: [
        { title: 'Active Recall', text: 'Instead of rereading notes, learners attempt to retrieve information without looking at the answers. This strengthens memory every time knowledge is successfully recalled.' },
        { title: 'Spaced Repetition', text: 'Reviewing material over several days or weeks is significantly more effective than studying everything in one session. Revisiting information just as it begins to fade strengthens long-term memory.' },
        { title: 'Interleaving', text: 'Rather than practising one topic repeatedly, students mix different but related topics during study sessions. It feels harder, but it improves the ability to recognise when different concepts should be applied.' },
        { title: 'Dual Coding', text: 'Combining words with diagrams, charts, or visual representations allows learners to process information through multiple pathways, making recall easier.' },
        { title: 'Self-Explanation', text: 'Explaining a concept in your own words forces the brain to organise knowledge into meaningful connections instead of memorising isolated facts.' },
      ] },
      { type: 'p', text: 'These techniques share one important characteristic: they require effort. Ironically, learning strategies that feel more difficult often produce better long-term results than those that feel easy — this is the **desirable difficulty** that drives real, lasting learning.' },

      { type: 'h2', text: 'Common Study Myths' },
      { type: 'p', text: 'Many ineffective study habits continue simply because they feel productive.' },
      { type: 'faq', items: [
        { q: 'Myth 1: Highlighting improves learning', a: 'Highlighting helps identify important information, but on its own it rarely improves long-term recall. Without active retrieval, highlighted pages often become colourful reminders rather than meaningful learning tools.' },
        { q: 'Myth 2: More study hours mean better results', a: 'Quality matters far more than quantity. A focused one-hour session using retrieval practice is often more effective than several hours of passive reading.' },
        { q: 'Myth 3: Cramming is the best way to prepare', a: 'Although cramming may improve short-term exam performance, most of the information is forgotten soon afterwards.' },
        { q: 'Myth 4: Multitasking saves time', a: 'Switching between studying, messaging, and social media reduces concentration and increases cognitive load, making learning less efficient.' },
        { q: 'Myth 5: Learning styles determine success', a: 'Despite its popularity, research has found little evidence that teaching students exclusively according to visual, auditory, or kinaesthetic learning styles improves learning outcomes. What matters more is selecting study techniques that match the nature of the content being learned.' },
      ] },

      { type: 'h2', text: 'What Students Should Do Instead' },
      { type: 'p', text: 'Improving study habits does not necessarily require studying longer. Instead, it requires studying differently. Students can significantly improve learning by:' },
      { type: 'ul', items: [
        '**Practising active recall** without looking at notes, then checking for accuracy — the fastest way to build durable memory.',
        '**Spacing out review** across days and weeks instead of relying on a single cramming session before the exam.',
        '**Interleaving similar topics** in the same session to sharpen the ability to tell concepts apart.',
        '**Pairing notes with diagrams**, charts, or visual summaries to reinforce understanding through dual coding.',
        '**Explaining each concept out loud**, in their own words, as if teaching it to someone else.',
        '**Prioritising adequate sleep**, since memory consolidation happens largely during rest.',
      ] },
      { type: 'p', text: 'Small changes in study behaviour often produce substantial improvements in long-term learning — and tools like Maieutic make it easy to build these evidence-based study techniques into a daily routine.' },

      { type: 'h2', text: 'Conclusion' },
      { type: 'p', text: 'Traditional studying has survived for generations not because it is the most effective approach, but because it is familiar. Activities such as rereading, highlighting, and cramming create the comforting feeling of learning, even when they contribute little to long-term understanding. Modern cognitive science has shown that effective learning is not determined by the number of hours spent studying but by how the brain is engaged during those hours.' },
      { type: 'p', text: 'Research consistently demonstrates that students learn more effectively when they actively retrieve information, revisit concepts over time, connect new ideas with existing knowledge, and embrace productive challenges rather than avoiding them. These strategies align with the way memory is formed, strengthened, and retained, making learning both deeper and more durable.' },
      { type: 'p', text: 'The future of education is not simply about smarter technologies or better classrooms — it is also about smarter learners. By replacing passive study habits with evidence-based learning techniques such as active recall and spaced repetition, students can move beyond memorising information for exams and begin developing knowledge that lasts long after the test is over.' },
      { type: 'callout', title: 'Study smarter with Maieutic', tone: 'warm', text: 'Maieutic is built around exactly the science covered in this article — active recall, spaced repetition, and retrieval practice — so students spend less time re-reading and more time remembering. If you want to turn these study techniques into a daily habit, Maieutic is designed to do the scheduling and retrieval prompts for you.' },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  {
    slug: '5-study-techniques-backed-by-cognitive-science',
    tag: 'Learning Science',
    title: '5 Study Techniques Backed by Cognitive Science That Actually Work',
    subtitle: 'Discover evidence-based learning strategies to improve retention, focus, and academic performance.',
    excerpt: 'Most students study the same way — reread, highlight, cram. Decades of research show these are among the least effective strategies. Here are five evidence-based techniques that actually improve retention and academic performance.',
    date: 'Jul 2026',
    dateISO: '2026-07-28',
    cover: '/images/blogs/study-techniques-cover.webp',
    coverAlt: 'Study Smarter, Not Harder — five techniques cognitive science actually backs',
    keywords: ['Study Techniques', 'Cognitive Science', 'Retrieval Practice', 'Spaced Repetition', 'Interleaving', 'Dual Coding'],
    body: [
      { type: 'lede', text: 'Most students study the same way: reread the chapter, highlight the important-looking sentences, maybe rewrite the notes a bit neater. It feels productive. Unfortunately, decades of cognitive science research point to an uncomfortable truth — these are some of the least effective ways to learn something.' },
      { type: 'p', text: 'The good news is that researchers have also identified exactly what does work: techniques that are simple, free, and backed by real experimental evidence, not just study-hack folklore. Here are five of the strongest, and how to use them.' },
      { type: 'p', text: 'These aren\'t obscure academic findings, either — they\'re some of the most replicated results in learning science, drawn from decades of controlled experiments across subjects ranging from vocabulary and foreign languages to physics and medicine. What varies is not whether they work, but how consistently students use them.' },
      { type: 'p', text: 'At Maieutic Edutech, we build these principles directly into how our platform paces lessons and reviews — so consider this the science behind what you\'ll experience when you learn with us.' },

      { type: 'h2', text: 'The Study Habits That Feel Productive but Aren\'t' },
      { type: 'p', text: 'In a landmark 2013 review of learning techniques, cognitive scientists rated the most commonly used study methods — highlighting, rereading, and cramming — as having low utility, despite being the most popular strategies students report using. It\'s worth understanding why these fall short before looking at what works:' },
      { type: 'ul', items: [
        '**Highlighting and underlining** direct attention to isolated phrases without requiring you to process how ideas connect, and studies find it provides little to no benefit over simply reading.',
        '**Rereading** builds familiarity with the text\'s appearance, which feels like understanding but is a different, and much weaker, mental process than being able to recall or apply it.',
        '**Cramming** can work for a recognition-based test the next morning, but the information decays fast, often within days, because it was never given time to consolidate.',
      ] },
      { type: 'callout', title: 'The pattern', text: 'All three feel effective in the moment because they\'re easy and create a sense of fluency. The five techniques below feel harder — and that extra effort is exactly what makes them work.' },

      { type: 'h2', kicker: 'Technique 01', text: 'Retrieval Practice — Force Your Brain to Recall, Not Reread' },
      { type: 'p', text: 'Also known as active recall, this is simply the act of closing the book and trying to pull information out of memory — through a practice quiz, a blank sheet of paper, or a flashcard — instead of passively reading it again.' },
      { type: 'p', text: '**Why it works:** Every time you successfully retrieve a memory, you strengthen the neural pathway to it. Rereading creates a comforting illusion of familiarity — the material looks recognizable, so it feels learned — but recognition and recall are very different mental operations. Only recall is what you\'ll need on an exam or in a real conversation.' },
      { type: 'h3', text: 'How to use it' },
      { type: 'ul', items: [
        'Turn your notes into questions before you study, then close the notes and answer them from memory.',
        'Use flashcards the right way — always try to answer before flipping the card, never flip first.',
        'At the end of a reading session, put it away and write down everything you remember, unprompted.',
      ] },
      { type: 'callout', title: 'Common mistake', tone: 'warm', text: 'Checking the answer the instant recall feels hard. Sit with the struggle for at least 10–15 seconds — that effortful searching is itself part of what strengthens the memory, even when you don\'t ultimately get the answer right.' },

      { type: 'h2', kicker: 'Technique 02', text: 'Spaced Repetition — Review Just Before You\'d Forget' },
      { type: 'p', text: 'Cramming feels efficient because it produces short-term recognition fast. But memory naturally fades on a predictable curve — the forgetting curve — and cramming does nothing to interrupt it. Spaced repetition spreads review sessions out over increasing intervals, timed to catch the memory right as it starts to fade.' },
      { type: 'p', text: '**Why it works:** Each time you successfully retrieve a memory right before you would have forgotten it, the memory gets consolidated more durably than it would from repeated same-day review. This is why studying for 20 minutes a day across two weeks beats one 5-hour cram session, even though the total time is similar.' },
      { type: 'h3', text: 'How to use it' },
      { type: 'ul', items: [
        'Review new material after 1 day, then 3 days, then a week, then roughly every two to four weeks after that.',
        'Use a spaced-repetition flashcard tool that automatically schedules reviews based on how well you knew each card last time.',
        'Don\'t wait until the night before an exam to start — spacing needs weeks, not hours, to work.',
      ] },
      { type: 'callout', title: 'Common mistake', tone: 'warm', text: 'Treating every flashcard the same. Cards you already know cold should get pushed further out; cards you keep missing should come back sooner. Most spaced-repetition software does this adjustment for you automatically.' },
      { type: 'quote', text: 'Cramming produces recognition. Spacing produces memory that actually lasts.' },

      { type: 'h2', kicker: 'Technique 03', text: 'Interleaving — Mix Topics Instead of Blocking Them' },
      { type: 'p', text: 'Most students study in blocks: finish all the algebra problems, then move to geometry, then trigonometry. Interleaving mixes related-but-different topics or problem types within a single study session instead.' },
      { type: 'p', text: '**Why it works:** Blocked practice makes each problem easy to solve because you already know which method applies — you\'re on the algebra page, so you use algebra. Interleaving forces your brain to first identify which type of problem it\'s looking at, then choose the right method — which is exactly the skill you actually need on a real exam, where problems aren\'t sorted by chapter.' },
      { type: 'h3', text: 'How to use it' },
      { type: 'ul', items: [
        'When practicing problem sets, mix problem types together instead of doing 20 of the same kind in a row.',
        'When studying multiple subjects for the week, rotate between them in a single sitting instead of dedicating one full day to each.',
        'Expect it to feel harder and slower in the moment — that extra difficulty is exactly what produces better long-term learning.',
      ] },
      { type: 'callout', title: 'Common mistake', tone: 'warm', text: 'Giving up on interleaving because a blocked practice session felt smoother. Smoother in practice often means weaker in memory — the fair comparison is how well you can tell the problem types apart a week later, not how it felt on the day.' },

      { type: 'h2', kicker: 'Technique 04', text: 'Elaboration & Self-Explanation — Explain It in Your Own Words' },
      { type: 'p', text: 'Elaboration means connecting new information to what you already know by continually asking why and how. Self-explanation is the practice of narrating your own reasoning out loud while you work through a problem or read a passage.' },
      { type: 'p', text: '**Why it works:** New information sticks better when it\'s woven into a web of existing knowledge rather than stored as an isolated fact. Explaining a concept in your own words — or to an imaginary student who knows nothing about it — exposes the gaps in your understanding immediately, well before an exam does.' },
      { type: 'h3', text: 'How to use it' },
      { type: 'ul', items: [
        'After reading a concept, ask yourself "why is this true?" and "how does this connect to what I already know?"',
        'Try teaching the material out loud to an empty room, a study partner, or even a pet — if you get stuck, that\'s exactly where to focus your review.',
        'For any formula or process, explain what would happen if one part of it changed.',
      ] },
      { type: 'quote', text: 'If you can\'t explain it simply, you don\'t understand it yet — and now you know exactly where to focus.' },

      { type: 'h2', kicker: 'Technique 05', text: 'Dual Coding — Pair Words With Visuals' },
      { type: 'p', text: 'Dual coding means representing the same information in two different formats — words and a visual, like a diagram, timeline, or sketch — rather than just text alone.' },
      { type: 'p', text: '**Why it works:** Verbal and visual information are processed through partly separate channels in memory. Encoding a concept both ways creates two retrieval paths back to the same idea instead of one, so if you forget the wording, the image can still cue the memory (and vice versa).' },
      { type: 'h3', text: 'How to use it' },
      { type: 'ul', items: [
        'When taking notes, sketch a simple diagram, timeline, or flowchart alongside the written explanation — it doesn\'t need to be a work of art.',
        'Turn processes into flowcharts and relationships into simple maps instead of paragraphs whenever you can.',
        'When reviewing, try reconstructing a diagram from memory, then check it against the original — this is retrieval practice and dual coding working together.',
      ] },

      { type: 'h2', text: 'Putting It All Together' },
      { type: 'p', text: 'None of these techniques require special tools, and they work even better combined. A realistic weekly rhythm might look like this:' },
      { type: 'ol', items: [
        'Turn new material into questions the same day you first encounter it, instead of just rereading your notes.',
        'Schedule review sessions at increasing intervals — a spaced-repetition app will do this automatically.',
        'Mix subjects and problem types within a single sitting rather than studying one topic for hours straight.',
        'Explain each concept out loud in your own words before you consider it "done."',
        'Sketch it. Pair at least one visual with any concept that has more than two moving parts.',
      ] },
      { type: 'p', text: 'It will feel harder than rereading and highlighting. That difficulty is the point — the techniques that feel the most effortful in the moment are, almost without exception, the ones that produce the strongest long-term learning.' },
      { type: 'table', head: ['Technique', 'In one line'], rows: [
        ['Retrieval Practice', 'Test yourself before rereading anything.'],
        ['Spaced Repetition', 'Review at growing intervals, not all at once.'],
        ['Interleaving', 'Mix topics and problem types together.'],
        ['Elaboration', 'Explain the why and how in your own words.'],
        ['Dual Coding', 'Pair every concept with a simple visual.'],
      ] },

      { type: 'h2', text: 'Where Maieutic Edutech Fits In' },
      { type: 'p', text: 'You shouldn\'t have to build a personal spaced-repetition schedule by hand or guess when to mix topics. That\'s exactly what Maieutic Edutech\'s adaptive learning engine handles for you — scheduling retrieval practice at the right intervals, interleaving related concepts automatically, and prompting you to explain ideas back before moving on.' },
      { type: 'callout', title: 'Ready to study the way cognitive science recommends?', tone: 'warm', text: 'Talk to our team about how these principles are built into the programmes and content we design.' },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  {
    slug: 'how-ai-is-personalizing-learning-paths-in-2026',
    tag: 'AI & Learning',
    title: 'How AI Is Personalizing Learning Paths in 2026',
    subtitle: 'The classroom is quietly splitting into millions of individual ones. Here\'s the mechanism behind AI-driven personalized learning — what it actually does, where the evidence stands, and what\'s still unresolved.',
    excerpt: 'The classroom is quietly splitting into millions of individual ones. Here is the mechanism behind AI-driven personalized learning — what it actually does, where the evidence stands, and what is still unresolved.',
    date: 'Aug 2026',
    dateISO: '2026-08-05',
    cover: '/images/blogs/ai-learning-paths-cover.webp',
    coverAlt: 'A learner at a laptop with adaptive dashboards floating above the screen',
    keywords: ['AI in Education', 'Personalized Learning', 'Adaptive Learning', 'Learner Model', 'Generative AI'],
    body: [
      { type: 'lede', text: 'Imagine two students sitting in the same classroom. One understands today\'s lesson within minutes, while the other needs another week of practice. Yet both are expected to follow the same lesson plan. For decades, that has been one of education\'s biggest challenges.' },
      { type: 'p', text: 'For most of the last century, a classroom of thirty students moved through the same textbook, at the same pace, toward the same test. The student who mastered fractions in a week sat through three more weeks of practice built for someone still struggling. The student still struggling moved on anyway, because the calendar said it was time.' },
      { type: 'p', text: 'Artificial intelligence is now dismantling that constraint — not by replacing teachers, but by giving each student something a single teacher managing thirty students never could: continuous, individualized attention to what they know, what they don\'t, and what they need next.' },

      { type: 'h2', text: 'From "Adaptive" to "Generative"' },
      { type: 'p', text: 'Personalized learning isn\'t new. If you\'ve ever used an online learning platform that adjusted question difficulty based on your performance, you\'ve already experienced adaptive learning. Adaptive software has existed since the 2000s, branching students down pre-built content paths based on quiz results. What\'s genuinely different heading into 2026 is the shift from **adaptive systems** (pick from pre-made content) to **generative systems** (create tailored content in real time, powered by large language models).' },
      { type: 'figure', src: '/images/blogs/ai-learning-paths-timeline.webp', alt: 'Timeline: rule-based branching (2000s–2010s), adaptive quiz engines (2015–2023), generative AI tutors (2024–2026)', caption: 'Three generations of personalized learning technology.' },
      { type: 'p', text: 'The practical difference: an adaptive quiz engine picks the next question from a bank someone already wrote. A generative tutor writes a new explanation, in a new way, for a student it has just watched struggle with a specific misconception — then generates a fresh practice problem targeting that exact gap.' },

      { type: 'h2', text: 'The Mechanism: How the Loop Actually Works' },
      { type: 'p', text: 'Behind every AI tutor — whether it\'s helping someone learn mathematics, coding, or a new language — the same learning cycle is constantly running in the background.' },
      { type: 'figure', src: '/images/blogs/ai-learning-paths-loop.webp', alt: 'Diagram of the four-step loop: diagnose, sequence, deliver, observe', caption: 'The personalization loop: diagnose → sequence → deliver → observe, then repeat.' },
      { type: 'p', text: 'Notice that this loop is, functionally, an automated version of what good learning science already prescribes: it diagnoses gaps rather than assuming mastery, sequences content instead of a fixed syllabus, and revisits material based on evidence of forgetting rather than a calendar. In other words, AI isn\'t inventing new pedagogy — it\'s operationalizing retrieval practice, spacing, and interleaving at a scale no single teacher could manage by hand.' },
      { type: 'callout', title: 'Learning science link', text: 'Spaced repetition scheduling, automatic interleaving of problem types, and low-stakes self-testing — all shown in cognitive psychology research to outperform rereading and cramming — map almost directly onto what "diagnose → sequence → deliver → observe" is built to do. AI\'s real contribution is automating the scheduling decisions a student would otherwise have to make (and usually make poorly) on their own.' },

      { type: 'h2', text: 'Four Dimensions of Personalization' },
      { type: 'p', text: '"Personalized learning" is often used as a single catch-all term, but in practice AI systems personalize along at least four distinct dimensions, and most real platforms only handle a subset of them well.' },
      { type: 'cards', items: [
        { title: 'Content — what a student is taught', text: 'The same concept — say, photosynthesis — might be explained through a chemistry lens for one student and an ecology lens for another, depending on which framing has previously helped that student\'s understanding click.' },
        { title: 'Pace — how fast a student moves', text: 'A student who demonstrates mastery in two attempts moves on; one who needs ten attempts gets ten, without the calendar forcing them forward before they\'re ready.' },
        { title: 'Modality — how material is presented', text: 'Worked examples, diagrams, verbal explanation, or hands-on problems — adjusted based on what has actually helped that student in the past, rather than a fixed assumption.' },
        { title: 'Feedback — how a student is told they\'re wrong', text: 'Generative systems can explain a specific misconception in a specific way — not just "incorrect," but "you divided before distributing the negative sign; here\'s why that changes the outcome."' },
      ] },
      { type: 'p', text: 'A genuinely personalised system needs to handle all four coherently. Many current tools still lean heavily on pace and feedback, with content and modality personalization lagging — worth noting if you\'re evaluating a specific platform rather than the category in general.' },

      { type: 'h2', text: 'The Invisible Engine Behind Personalized Learning' },
      { type: 'p', text: 'Have you ever wondered how an AI tutor seems to know exactly what you\'re struggling with? One moment it\'s giving you an easier example, and the next it\'s confidently moving you to a more challenging problem. It can almost feel as though the system is reading your mind. It isn\'t.' },
      { type: 'p', text: 'What makes AI-powered learning so effective isn\'t mind reading — it\'s data. Every click, answer, pause, correction, and request for help tells the system something about how you\'re learning. Individually, these actions may seem insignificant. Together, they form a detailed picture of your learning journey.' },
      { type: 'p', text: 'Unlike a traditional classroom, where a teacher may only see your homework score or exam result, AI observes the learning process itself. It notices whether you answered correctly on the first attempt or only after several hints. It tracks how long you spent solving a problem, whether you repeatedly make the same mistake, and whether your understanding improves after receiving feedback.' },
      { type: 'p', text: 'Over time, these seemingly small observations help build what researchers call a **learner model** — a continuously updated profile that estimates what you already know, what you\'re beginning to understand, and where misconceptions still exist.' },
      { type: 'p', text: 'Think of it as the educational equivalent of a fitness tracker. Just as a smartwatch doesn\'t simply count the number of steps you take but analyses patterns in your movement, heart rate, and activity over time, an AI learning system looks beyond right and wrong answers to identify patterns in how you learn. The result is a learning experience that becomes increasingly personalised the more you use it.' },

      { type: 'h2', text: 'AI Doesn\'t Read Minds — It Makes Predictions' },
      { type: 'p', text: 'One of the biggest misconceptions about AI in education is that it somehow "knows" what a student understands. In reality, AI is constantly making educated predictions.' },
      { type: 'p', text: 'Imagine two students answering the same mathematics question correctly. At first glance, both appear to have mastered the concept. Yet the paths they took to get there may have been completely different. One student solved the problem independently in less than a minute. The other needed three hints, changed their answer twice, and eventually guessed correctly.' },
      { type: 'p', text: 'A human teacher might recognise this difference if they were watching closely. AI systems attempt to do the same by analysing every interaction. They ask questions such as:' },
      { type: 'ul', items: [
        'Did the student answer confidently?',
        'How much time was needed?',
        'Are similar mistakes appearing repeatedly?',
        'Has performance improved since the previous lesson?',
        'Is this knowledge still remembered after several days?',
      ] },
      { type: 'p', text: 'Instead of treating a correct answer as proof of mastery, AI looks for consistent patterns. It asks whether the learner is likely to succeed again tomorrow, next week, or next month. This is why personalised learning pathways are never fixed. Every lesson becomes another opportunity for the system to refine its understanding of the learner and adjust the next recommendation accordingly.' },

      { type: 'h2', text: 'Where AI Personalization Makes the Biggest Difference' },
      { type: 'p', text: 'AI isn\'t equally transformative in every learning situation. Its greatest impact is seen where learners progress at different speeds, require frequent feedback, or need support outside traditional classroom hours.' },
      { type: 'p', text: 'Consider **mathematics**. Missing one foundational concept — such as fractions or algebraic equations — can make every subsequent topic more difficult. AI systems can identify these gaps early and recommend additional practice before students fall behind.' },
      { type: 'p', text: '**Language learning** offers another compelling example. Rather than asking every learner to complete identical vocabulary exercises, AI can focus on words an individual repeatedly forgets while introducing new material only when previous concepts have been mastered.' },
      { type: 'p', text: 'In **higher education**, personalised learning helps address one of the biggest challenges facing universities today: scale. A lecturer teaching hundreds of students simply cannot provide detailed, individual feedback after every activity. AI can bridge that gap by offering immediate explanations, additional examples, and targeted practice between classes, allowing educators to focus on deeper discussion and critical thinking.' },
      { type: 'p', text: 'Perhaps most importantly, personalised learning extends beyond schools and universities. Professionals updating their skills, employees completing workplace training, and lifelong learners exploring new subjects all benefit from learning pathways that adapt to their existing knowledge rather than forcing everyone through the same content.' },

      { type: 'h2', text: 'The Challenges We Can\'t Ignore' },
      { type: 'p', text: 'While AI is transforming education, it also brings important challenges that educators and institutions must address.' },
      { type: 'ul', items: [
        '**Student privacy:** AI systems collect large amounts of learning data. Protecting this information and ensuring responsible data use is essential.',
        '**Algorithmic bias:** AI models learn from existing data, which may contain biases. Without careful monitoring, recommendations may not be equally fair for every learner.',
        '**AI hallucinations:** Generative AI can occasionally produce inaccurate or misleading information. Teacher oversight and trusted learning resources remain important.',
        '**Overdependence on AI:** Constant guidance may reduce opportunities for productive struggle, which is essential for developing critical thinking and problem-solving skills.',
        '**The role of teachers:** AI can personalise learning, but it cannot replace the empathy, judgement, and mentorship that teachers bring to the classroom.',
      ] },

      { type: 'h2', text: 'Conclusion' },
      { type: 'p', text: 'Artificial intelligence is not changing the fundamental science of how people learn. Principles such as retrieval practice, spaced repetition, timely feedback, and productive struggle remain the foundation of effective learning. What AI is changing is how these principles are applied — making it possible to personalise instruction continuously and at a scale that was once unimaginable.' },
      { type: 'p', text: 'As education moves further into 2026, the true value of AI will not be measured by how advanced the technology becomes, but by how thoughtfully it is integrated into teaching and learning. When used responsibly, AI can help educators identify learning gaps earlier, provide timely support, and create learning experiences that adapt to the unique needs of every student. However, its success will depend on protecting student privacy, ensuring fairness, maintaining transparency, and keeping teachers at the centre of every learning journey.' },
      { type: 'quote', text: 'The classroom of tomorrow will not simply be smarter because of AI — it will be better because it empowers every learner to progress at their own pace while enabling educators to focus on what matters most: inspiring curiosity, critical thinking, and lifelong learning.' },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  {
    slug: 'ananya-case-study-28-points-in-90-days',
    tag: 'Success Story',
    title: "Ananya's Journey: A Maieutic Learner Case Study",
    subtitle: 'How Ananya improved her score by 28 points in 90 days with a diagnostic-first, feedback-driven approach to exam preparation.',
    excerpt: "How one learner's path through a Maieutic-supported online programme illustrates what structured content, mentoring, and support can change — a real-world case study.",
    date: 'Aug 2026',
    dateISO: '2026-08-10',
    cover: '/images/blogs/ananya-cover.webp',
    coverAlt: 'Rising bar chart on a teal background',
    keywords: ['Case Study', 'Exam Preparation', 'Diagnostic Assessment', 'Feedback Loops', 'Student Success'],
    body: [
      { type: 'lede', text: 'When Ananya first reached out to Maieutic, she was stuck. Despite months of self-study, her practice scores had plateaued, and the gap between where she was and where she needed to be felt wider every week. Like many learners, she wasn\'t short on effort — she was short on the right strategy.' },
      { type: 'stats', items: [
        { value: '52', label: 'Baseline score (out of 100)' },
        { value: '78', label: 'Target score' },
        { value: '90', label: 'Days' },
        { value: '+28', label: 'Final improvement' },
      ] },

      { type: 'h2', text: '1. The Starting Point' },
      { type: 'p', text: 'Her diagnostic assessment told the real story: strong fundamentals in some areas, but inconsistent performance under timed conditions, and a handful of recurring weak spots she hadn\'t been able to identify on her own.' },
      { type: 'figure', src: '/images/blogs/ananya-baseline.webp', alt: 'Bar chart of baseline scores by section: Listening 58, Reading 54, Writing 49, Speaking 61', caption: 'Figure 1: Section-wise baseline scores from Ananya\'s initial diagnostic assessment.' },
      { type: 'p', text: 'Her opening diagnostic pinpointed exactly where the biggest gaps were — writing and reading emerged as the two sections needing the most attention.' },

      { type: 'h2', text: '2. The Challenge' },
      { type: 'p', text: 'Three things stood out early on:' },
      { type: 'table', head: ['Issue', 'What it looked like'], rows: [
        ['Uneven pacing', 'Ananya often ran out of time on sections she understood well, because she over-invested in a few difficult questions.'],
        ['Hidden blind spots', 'Certain question types kept tripping her up, but without structured feedback she was treating symptoms, not root causes.'],
        ['Motivation dips', 'Ninety days is a long runway — without visible markers of progress, it\'s easy to lose momentum halfway through.'],
      ] },

      { type: 'h2', text: '3. The Strategy' },
      { type: 'p', text: 'Working with Maieutic, Ananya\'s prep was rebuilt around three pillars:' },
      { type: 'cards', items: [
        { title: 'Diagnostic-first planning', text: 'Instead of generic practice, her study plan was built directly from her diagnostic results — prioritizing the specific concepts and question types costing her the most points.' },
        { title: 'Weekly feedback loops', text: 'Rather than waiting until the next mock test, Ananya reviewed her performance every week, adjusting focus areas in near real-time instead of repeating the same mistakes for a month.' },
        { title: 'Timed practice, deliberately', text: 'Once fundamentals improved, the focus shifted to pacing — simulating real test conditions so time pressure stopped being the enemy.' },
      ] },

      { type: 'h2', text: '4. 90-Day Progress' },
      { type: 'p', text: 'Ananya\'s score climbed steadily over the 90-day program. The improvement wasn\'t a lucky spike on test day — her mock scores show a consistent upward trend, which gave her genuine confidence walking into the real exam.' },
      { type: 'figure', src: '/images/blogs/ananya-progress.webp', alt: 'Line chart of weekly mock test scores rising from 52 at week 0 to 80 at week 12', caption: 'Figure 2: Weekly mock test scores across the 90-day program.' },
      { type: 'table', head: ['Milestone', 'Week', 'Outcome'], rows: [
        ['Diagnostic', 'Week 1', 'Baseline established (52)'],
        ['First gains', 'Week 4', 'Measurable gains in target areas'],
        ['Consistency', 'Week 8', 'Stable scores under timed conditions'],
        ['Final result', 'Day 90', '+28 points from baseline'],
      ] },

      { type: 'h2', text: '5. The Results' },
      { type: 'p', text: 'Over 90 days, Ananya\'s score climbed by 28 points — from 52 to 80. Every section improved, with the biggest gains in writing, her weakest area at the start.' },
      { type: 'figure', src: '/images/blogs/ananya-comparison.webp', alt: 'Grouped bar chart comparing before and after scores in listening, reading, writing, speaking and overall', caption: 'Figure 3: Before-and-after comparison across all four sections.' },
      { type: 'table', head: ['Section', 'Before', 'After', 'Change'], rows: [
        ['Listening', '58', '78', '+20'],
        ['Reading', '54', '74', '+20'],
        ['Writing', '49', '71', '+22'],
        ['Speaking', '61', '82', '+21'],
        ['Overall', '52', '80', '+28'],
      ] },

      { type: 'h2', text: '6. What Made the Difference' },
      { type: 'p', text: 'Ananya\'s own reflection on the experience points to two things: **clarity and accountability**. She stopped guessing at what to study and started following a plan built around her actual gaps. The weekly check-ins meant she was never drifting for long before getting redirected.' },
      { type: 'h3', text: 'Key takeaways for your own prep' },
      { type: 'ul', items: [
        '**Start with a real diagnostic** — don\'t guess where your weaknesses are.',
        '**Review often, not just at the end** — small corrections compound.',
        '**Practice under real conditions** — content mastery and time management are two different skills.',
        '**Track progress visibly** — motivation lasts longer when you can see it working.',
      ] },

      { type: 'h2', text: '7. Ready to Write Your Own Success Story?' },
      { type: 'p', text: 'Ananya\'s journey shows what\'s possible with the right structure: a clear diagnostic, a plan built around real gaps, and consistent feedback along the way.' },
      { type: 'callout', title: 'Get started with Maieutic', tone: 'warm', text: 'Book a free diagnostic assessment and see what a personalized, feedback-driven approach can do for your score.' },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  {
    slug: 'the-state-of-edtech-in-2026',
    tag: 'EdTech Trends',
    title: 'The State of EdTech in 2026: What Every Student Needs to Know',
    subtitle: 'A look at the latest trends, technologies, and opportunities shaping the future of education.',
    excerpt: 'Five years ago, online learning meant pre-recorded lectures and a discussion forum nobody checked. In 2026, that description feels almost quaint. A look at the trends, technologies, and opportunities shaping education right now.',
    date: 'Aug 2026',
    dateISO: '2026-08-14',
    cover: '/images/blogs/state-of-edtech-cover.webp',
    coverAlt: 'EdTech in 2026 — personalized, immersive, career-ready',
    keywords: ['EdTech 2026', 'AI in Education', 'Micro-Credentials', 'Immersive Learning', 'Hybrid Learning', 'AI Literacy'],
    body: [
      { type: 'lede', text: 'Five years ago, "online learning" mostly meant pre-recorded lectures and a discussion forum nobody checked. In 2026, that description feels almost quaint. Classrooms — physical and virtual — now run on adaptive AI, immersive simulations, and credentials that employers actually trust more than a line on a resume.' },
      { type: 'p', text: 'If you\'re a student, a working professional upskilling on the side, or a parent trying to make sense of where education is headed, this guide breaks down exactly what\'s changed, what\'s hype, and what\'s genuinely worth your time and money in 2026.' },
      { type: 'p', text: 'At Maieutic Edutech, we spend every day building tools inside these shifts — so consider this both a trend report and a field guide.' },

      { type: 'h2', kicker: 'Trend 01', text: 'AI Tutors Have Moved From Novelty to Necessity' },
      { type: 'p', text: 'The biggest shift in education this year isn\'t a single app — it\'s the normalization of AI-powered personalized learning. What started as chatbots answering homework questions has evolved into full adaptive tutoring systems that:' },
      { type: 'ul', items: [
        'Diagnose exactly where a student\'s understanding breaks down (not just that they got a question wrong, but why).',
        'Adjust pacing and difficulty in real time, instead of forcing everyone through the same fixed curriculum.',
        'Provide instant, judgment-free feedback at 2 a.m. the night before an exam.',
      ] },
      { type: 'p', text: '**Why it matters for students:** The old one-size-fits-all classroom model assumed every learner needed the same explanation, at the same speed, in the same format. AI tutoring finally makes it practical to give each student their own pace and path — something teachers have wanted to do for decades but rarely had the bandwidth for.' },
      { type: 'p', text: '**What to watch for:** Not all "AI-powered" platforms are created equal. Some just slap a chatbot onto old content. The ones worth your time show visible reasoning — they explain concepts in multiple ways until one clicks, rather than repeating the same explanation louder.' },

      { type: 'h2', kicker: 'Trend 02', text: 'Microlearning and Skills-First Credentials Are Reshaping "What Counts"' },
      { type: 'p', text: 'Four-year degrees aren\'t disappearing, but 2026 has cemented a second, parallel track: short, stackable, skills-based credentials that employers increasingly weight alongside — or even above — traditional degrees for entry-level and mid-career roles. This shift is driven by three things happening at once:' },
      { type: 'ol', items: [
        '**Employers are burned out on résumé mismatch.** Skills-based hiring platforms have made it normal to filter candidates by verified competencies rather than degree titles alone.',
        '**Industries move faster than curricula.** A four-year computer science degree can\'t keep pace with tools that change every 18 months — but a focused 6-week certification can.',
        '**Learners want proof, not just a transcript line.** Verifiable digital credentials (often blockchain-backed or portfolio-linked) let students show exactly what they can do, with evidence attached.',
      ] },
      { type: 'p', text: '**Why it matters for students:** You don\'t have to choose between "get a degree" and "get a certificate" anymore — the winning strategy in 2026 is stacking both. A relevant micro-credential earned during or after a degree signals initiative and up-to-date skills to employers scanning hundreds of applications.' },
      { type: 'quote', text: 'The winning strategy in 2026 isn\'t degree vs. certificate — it\'s stacking both.' },

      { type: 'h2', kicker: 'Trend 03', text: 'Immersive Learning Finally Delivers on Its Promise' },
      { type: 'p', text: 'VR and AR in education were talked about for almost a decade before the hardware, content, and price points caught up with the hype. In 2026, immersive learning is no longer a gimmick reserved for a handful of university labs — it\'s showing up in:' },
      { type: 'ul', items: [
        '**Medical and nursing programs**, where students practice procedures on realistic virtual patients before ever touching a real one.',
        '**Vocational and trade training**, where simulated equipment lets learners make (and learn from) costly mistakes safely.',
        '**Language learning**, through immersive conversational environments that respond dynamically instead of following a scripted dialogue tree.',
        '**History and science classes**, letting students "walk through" ancient Rome or "stand inside" a cell during mitosis.',
      ] },
      { type: 'p', text: '**Why it matters for students:** Immersive tools compress the gap between learning about something and practicing it. For hands-on fields especially, this means graduating with genuine muscle memory and confidence — not just theoretical knowledge.' },

      { type: 'h2', kicker: 'Trend 04', text: 'Data Privacy and AI Literacy Are Now Core Curriculum' },
      { type: 'p', text: 'As AI tools became embedded in daily coursework, 2026 also brought a necessary reckoning: students need to understand how these tools work, where their data goes, and when to be skeptical of an AI-generated answer. Leading institutions and platforms have responded by building in:' },
      { type: 'ul', items: [
        'Transparent AI-use policies that distinguish between using AI as a tutor versus using it to bypass learning entirely.',
        'Explainable AI feedback, so students see why an answer was flagged wrong, not just that it was.',
        'Digital literacy modules covering data privacy, algorithmic bias, and how to fact-check AI output — increasingly treated as a foundational skill, alongside reading and math.',
      ] },
      { type: 'p', text: '**Why it matters for students:** The students who thrive over the next decade won\'t be the ones who avoid AI, nor the ones who blindly trust it — they\'ll be the ones who know how to work with it critically.' },

      { type: 'h2', kicker: 'Trend 05', text: 'Hybrid and Asynchronous Learning Are the New Default' },
      { type: 'p', text: 'The pandemic forced remote learning into existence almost overnight; five years of iteration later, in 2026, the result is far more refined. Hybrid and asynchronous models are no longer a compromise — for many learners, they\'re the preferred format, and platforms have gotten much smarter about which parts of learning benefit from real-time interaction versus independent practice:' },
      { type: 'ul', items: [
        'Live sessions are increasingly reserved for discussion, mentorship, and collaborative problem-solving.',
        'Core content delivery happens asynchronously, letting students learn at the time and pace that fits their life.',
        'Cohort-based accountability has emerged as the fix for the isolation and low completion rates that plagued early self-paced online courses.',
      ] },
      { type: 'p', text: '**Why it matters for students:** Flexibility used to come at the cost of structure. The 2026 model blends flexibility with accountability, which is proving far more effective for finishing what you start.' },
      { type: 'quote', text: 'Motivation, not intelligence, is usually the real reason students don\'t finish a course.' },

      { type: 'h2', kicker: 'Trend 06', text: 'Career-Aligned Learning Paths Are Replacing Generic Catalogs' },
      { type: 'p', text: 'Platforms and institutions are moving away from long, undifferentiated course catalogs and toward outcome-mapped learning paths — sequences of courses and hands-on projects explicitly designed to lead to a specific job, role, or industry certification, rather than leaving students to guess which combination of classes adds up to something employers value.' },
      { type: 'p', text: 'This means less time spent wondering "will this course actually help my career?" and more platforms doing that mapping for you, based on real hiring data and direct industry input.' },
      { type: 'p', text: '**Why it matters for students:** Knowing a learning path was built in consultation with the industry you\'re targeting gives you more confidence your time investment will pay off.' },

      { type: 'h2', kicker: 'Trend 07', text: 'Gamification Has Grown Up' },
      { type: 'p', text: 'Early attempts at gamified learning were mostly cosmetic: points and badges bolted onto the same old worksheets. In 2026, the platforms that actually move the needle on engagement use gamification mechanics grounded in real behavioral science — streaks, mastery-based leveling, and social accountability designed around why people actually stay motivated, not just what looks fun in a product demo.' },
      { type: 'ul', items: [
        'Streaks and habit loops now build in recovery paths instead of punishing a single missed day.',
        'Mastery-based leveling replaces simple point-scoring with genuine competence gained.',
        'Social and cohort motivators tap into accountability far more effectively than solo point systems.',
      ] },
      { type: 'p', text: '**Why it matters for students:** Well-designed gamification removes the friction that causes people to quit in week two — historically where most online courses lose the majority of learners.' },

      { type: 'h2', kicker: 'Trend 08', text: 'Global Access Is Closing the Gap — Unevenly' },
      { type: 'p', text: 'One of the most encouraging EdTech stories of 2026 is affordability and reach. Mobile-first platforms, offline-capable apps, and lower-bandwidth video delivery have made quality instruction accessible in regions where reliable broadband and expensive laptops were previously the barrier to entry. At the same time, it\'s worth being clear-eyed about where meaningful gaps remain: language and localization are still catching up, device access still isn\'t universal even as smartphone-first design has helped enormously, and credential recognition across borders remains improving but inconsistent.' },
      { type: 'p', text: '**Why it matters for students:** Offline modes, low-data options, and transparent credential recognition are good signals of a platform built for who gets to learn, not just who can afford to.' },

      { type: 'h2', text: 'So, What Should Students Actually Do in 2026?' },
      { type: 'p', text: 'With all these shifts happening at once, it\'s easy to feel like you need to chase every trend. You don\'t. Here\'s a grounded way to think about it:' },
      { type: 'ol', items: [
        '**Use AI tools to understand, not to shortcut.** Close gaps in understanding — don\'t just generate answers you don\'t grasp.',
        '**Treat credentials as a portfolio, not a single bet.** Stack a degree with a couple of highly relevant micro-credentials.',
        '**Prioritize platforms that show their reasoning.** Look for tools transparent about why they recommend what they recommend.',
        '**Don\'t underestimate immersive formats** if you\'re in a hands-on field.',
        '**Build your own AI literacy deliberately.** This is now a core employability skill, not an elective.',
        '**Pick platforms that fight for your motivation**, not just your attention.',
        '**Check accessibility, not just content.**',
      ] },

      { type: 'h2', text: 'Where Maieutic Edutech Fits In' },
      { type: 'p', text: 'Every trend above points to the same underlying need: learning that adapts to the student, not the other way around. That\'s the principle Maieutic Edutech is built on.' },
      { type: 'callout', title: 'Ready to see what a truly personalized learning path looks like?', tone: 'warm', text: 'Explore Maieutic Edutech\'s programmes and solutions, or get in touch with our team.' },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  {
    slug: 'behind-the-whiteboard-conversation-with-our-top-rated-mentor',
    tag: 'Teaching & Mentorship',
    title: 'Behind the Whiteboard: A Conversation with Our Top-Rated Mentor',
    subtitle: 'Go beyond the classroom and discover the passion, purpose, and philosophy that shape exceptional teaching.',
    excerpt: 'Go beyond the classroom and discover the passion, purpose, and philosophy that shape exceptional teaching. A look at the life and mindset of one of our most inspiring mentors — beyond the lesson plans and presentations.',
    date: 'Aug 2026',
    dateISO: '2026-08-25',
    cover: '/images/blogs/behind-the-whiteboard-cover.webp',
    coverAlt: 'A mentor leading a small-group discussion in front of a whiteboard',
    keywords: ['Mentorship', 'Teaching Philosophy', 'Educators', 'Learner-Centred Teaching', 'EdTech'],
    body: [
      { type: 'lede', text: 'When we think of a great teacher, we often remember the lectures that made difficult concepts easy to understand, the encouragement that came at just the right moment, or the advice that stayed with us long after graduation. Yet, what students experience in the classroom is only a small part of an educator\'s journey. Behind every well-prepared lecture is hours of planning, continuous learning, thoughtful reflection, and an unwavering commitment to helping students succeed.' },
      { type: 'p', text: 'Teaching is often described as one of the most rewarding professions, but it is also one of the most demanding. Educators wear many hats — they are mentors, motivators, guides, problem-solvers, and lifelong learners. They celebrate their students\' achievements, encourage them through setbacks, and constantly adapt their teaching to meet changing educational needs.' },
      { type: 'p', text: 'In today\'s rapidly evolving educational landscape, where technology, artificial intelligence, and personalised learning are transforming classrooms, the role of teachers has become more dynamic than ever. While digital tools can enhance learning experiences, the human connection between teachers and students remains irreplaceable.' },
      { type: 'p', text: 'In this edition of Behind the Whiteboard, we take a closer look at the life and mindset of one of our most inspiring mentors. Rather than focusing solely on qualifications or achievements, this feature explores the experiences, values, and everyday practices that make great teaching possible. It is a journey beyond lesson plans and presentations — a glimpse into the dedication that shapes every successful classroom.' },

      { type: 'h2', text: 'A Journey That Began with Curiosity' },
      { type: 'p', text: 'Every educator has a story, and most of those stories begin with a simple desire to make a difference.' },
      { type: 'p', text: 'For our featured mentor, teaching was never just about delivering information. It was about creating opportunities for students to discover their own potential. The excitement of explaining a challenging concept, watching confusion turn into understanding, and witnessing students gain confidence became the driving force behind a career dedicated to education.' },
      { type: 'p', text: 'Like many teachers, the journey did not begin in front of a classroom. It started with a passion for learning, mentoring peers, participating in academic discussions, and helping others overcome learning challenges. These early experiences revealed something profound — knowledge becomes far more meaningful when it is shared.' },
      { type: 'p', text: 'Over the years, classrooms have changed dramatically. Chalkboards have been replaced by smart boards, textbooks have evolved into digital resources, and artificial intelligence has become a powerful educational tool. Yet, the purpose of teaching has remained remarkably consistent: helping students grow academically, personally, and professionally.' },

      { type: 'h2', text: 'Beyond the Whiteboard' },
      { type: 'p', text: 'Students often see only the final performance — the lecture itself. They experience a confident explanation, an engaging classroom discussion, or a well-designed presentation. What they rarely see is the preparation that happens behind the scenes.' },
      { type: 'p', text: 'An effective lesson begins long before students enter the classroom. It starts with researching current developments, reviewing learning objectives, identifying common misconceptions, and designing activities that encourage participation rather than passive listening.' },
      { type: 'p', text: 'Today\'s educators also spend considerable time updating course materials, exploring new teaching methods, and integrating digital tools that improve student engagement. Continuous professional development has become an essential part of teaching, ensuring that educators remain informed about changes in their subject areas as well as emerging educational practices.' },
      { type: 'p', text: 'Teaching extends beyond scheduled class hours. Answering student queries, providing individual guidance, reviewing assignments, and mentoring learners often continue well after lectures have ended. While much of this work remains invisible to students, it plays a crucial role in creating meaningful learning experiences.' },
      { type: 'quote', text: 'Great teaching is rarely spontaneous. It is the result of careful preparation, thoughtful planning, and a genuine commitment to helping every learner succeed.' },

      { type: 'h2', text: 'The Philosophy of Great Teaching' },
      { type: 'p', text: 'Ask outstanding educators what makes a successful classroom, and few will begin by talking about grades. Instead, they often speak about curiosity, confidence, and meaningful engagement.' },
      { type: 'p', text: 'Effective teaching is not about presenting information as quickly as possible. It is about creating an environment where students feel comfortable asking questions, making mistakes, and exploring ideas without fear of judgement.' },
      { type: 'p', text: 'One philosophy that consistently guides experienced educators is the belief that **understanding is far more valuable than memorisation**. Students may remember facts for an examination, but true learning occurs when they understand why concepts work and how they can apply them in real-world situations.' },
      { type: 'p', text: 'This learner-centred approach shifts the classroom from a place where knowledge is delivered to one where knowledge is constructed collaboratively. Discussions replace one-way communication, problem-solving complements theory, and students become active participants rather than passive listeners.' },
      { type: 'p', text: 'Great teachers also recognise that every learner is different. Some students grasp concepts immediately, while others require additional examples or practical applications. Rather than expecting every student to learn in exactly the same way, effective educators adapt their explanations, examples, and teaching strategies to meet diverse learning needs.' },

      { type: 'h2', text: 'Building Connections That Inspire Learning' },
      { type: 'p', text: 'One of the defining characteristics of exceptional mentors is their ability to build meaningful relationships with students.' },
      { type: 'p', text: 'Learning is not solely an intellectual process — it is also an emotional one. Students are more likely to engage with challenging material when they feel supported, respected, and encouraged. A welcoming classroom environment can significantly influence motivation, confidence, and academic performance.' },
      { type: 'p', text: 'Great mentors understand that success often begins with listening. Taking time to understand students\' concerns, aspirations, and learning challenges allows educators to provide guidance that extends beyond academic content.' },
      { type: 'p', text: 'These relationships also encourage resilience. Students who feel supported are more willing to attempt difficult tasks, learn from mistakes, and persevere when faced with challenges. In many cases, the confidence gained through mentorship becomes just as valuable as the knowledge acquired in the classroom.' },

      { type: 'h2', text: 'Embracing Technology Without Losing the Human Touch' },
      { type: 'p', text: 'Technology has transformed education in remarkable ways. Digital learning platforms, interactive simulations, virtual laboratories, and artificial intelligence have expanded access to knowledge like never before.' },
      { type: 'p', text: 'Modern educators increasingly use technology to enhance learning rather than replace traditional teaching. AI-powered tools can generate personalised practice questions, provide immediate feedback, summarise complex topics, and identify learning gaps. These capabilities allow teachers to focus more on discussion, critical thinking, and personalised guidance.' },
      { type: 'p', text: 'However, technology is most effective when viewed as a partner rather than a substitute. While AI can process information rapidly and personalise learning pathways, it cannot replace empathy, encouragement, ethical judgement, or the inspiration that comes from meaningful human interaction.' },
      { type: 'p', text: 'The future of education will likely combine the strengths of both. Intelligent technologies will manage routine tasks and provide personalised support, while teachers continue to guide, motivate, and mentor students through increasingly complex learning experiences.' },

      { type: 'h2', text: 'Challenges That Shape Better Educators' },
      { type: 'p', text: 'Teaching is rewarding, but it is not without its challenges. Every classroom contains students with different backgrounds, abilities, interests, and aspirations. Designing lessons that engage everyone equally requires creativity, patience, and adaptability.' },
      { type: 'p', text: 'Another ongoing challenge is helping students move beyond examination-focused learning. Many learners understandably prioritise grades, yet education is about far more than assessment. Encouraging curiosity, independent thinking, and lifelong learning requires educators to challenge traditional perceptions of success.' },
      { type: 'p', text: 'The rapid pace of technological change also presents new opportunities and responsibilities. Teachers must continuously update their knowledge, evaluate new educational tools, and ensure that technology supports meaningful learning rather than becoming a distraction.' },
      { type: 'p', text: 'Despite these challenges, experienced mentors often view them as opportunities for growth. Every classroom presents new lessons, not only for students but also for educators themselves.' },

      { type: 'h2', text: 'Lessons Every Student Should Remember' },
      { type: 'p', text: 'When asked what advice they would offer students, many experienced educators return to remarkably similar themes.' },
      { type: 'cards', items: [
        { title: 'Stay curious', text: 'Curiosity transforms learning from a task into an exploration. Students who ask questions often develop deeper understanding than those who simply memorise answers.' },
        { title: 'Focus on understanding', text: 'Memorisation has its place, but genuine learning comes from connecting ideas, solving problems, and applying knowledge in new situations.' },
        { title: 'Learn consistently', text: 'Regular study sessions are far more effective than last-minute cramming. Small, consistent efforts build stronger and more lasting understanding.' },
        { title: 'Don\'t fear mistakes', text: 'Every mistake provides valuable feedback. Rather than viewing errors as failures, successful learners see them as opportunities to improve.' },
        { title: 'Use technology wisely', text: 'Digital tools can accelerate learning, but they should support independent thinking rather than replace it.' },
      ] },
      { type: 'p', text: 'Above all, education should never be viewed as something that ends with graduation. The most successful individuals remain learners throughout their lives, continually adapting to new knowledge, skills, and opportunities.' },

      { type: 'h2', text: 'Looking Towards the Future' },
      { type: 'p', text: 'Education is entering one of the most exciting periods in its history. Artificial intelligence, adaptive learning systems, virtual reality, and data-driven teaching are reshaping how knowledge is delivered and experienced. Students increasingly have access to personalised learning experiences that adapt to their pace, strengths, and areas for improvement.' },
      { type: 'p', text: 'Yet, as education becomes more technologically advanced, the role of educators becomes even more important. Information is now available almost instantly, but helping students evaluate that information critically, think creatively, solve complex problems, and collaborate effectively remains a uniquely human responsibility.' },
      { type: 'p', text: 'The classrooms of tomorrow will not simply teach students what to think. They will help them learn how to think, how to adapt, and how to continue learning throughout their lives. Teachers will remain at the centre of this transformation — not because they possess all the answers, but because they empower students to discover answers for themselves.' },

      { type: 'h2', text: 'More Than a Mentor' },
      { type: 'p', text: 'Behind every inspiring teacher is a story of dedication, resilience, and continuous learning. Great educators invest countless hours preparing lessons, refining their teaching, and supporting students in ways that often go unnoticed. Their influence extends far beyond academic achievement, shaping confidence, character, and a lifelong love of learning.' },
      { type: 'p', text: 'The whiteboard may be where lessons begin, but it is never where a teacher\'s impact ends. Every encouraging conversation, every thoughtful piece of feedback, and every moment spent helping a student overcome a challenge contributes to a legacy that reaches far beyond the classroom.' },
      { type: 'p', text: 'As education continues to evolve, one truth remains unchanged: technology can enhance learning, but it is passionate educators who inspire it. Their ability to connect with students, nurture curiosity, and guide learners through both success and failure will always be at the heart of meaningful education.' },
      { type: 'quote', text: 'The next time you walk into a classroom or join an online lecture, remember that behind every lesson is an educator who has spent years learning, adapting, and preparing — not simply to teach a subject, but to inspire the people who will shape the future. That is what truly happens behind the whiteboard.' },
    ],
  },

  /* ────────────────────────────────────────────────────────────────────── */
  {
    slug: 'new-cohort-launch-whats-different-this-term',
    tag: 'Platform News',
    title: 'New Cohort Launch: What\'s Different This Term?',
    subtitle: 'Discover the new features, enhancements, and opportunities awaiting students in our latest cohort.',
    excerpt: 'A new term means a new cohort — and this one comes with more changes than usual. Rebuilt AI tutor, three new career-aligned tracks, expanded live mentorship, and credentials that actually hold up when you are job-hunting.',
    date: 'Sep 2026',
    dateISO: '2026-09-23',
    cover: '/images/blogs/new-cohort-cover.webp',
    coverAlt: 'A New Term, Reimagined — illustrated learners around a launching rocket',
    keywords: ['Cohort Launch', 'AI Tutor 2.0', 'Career Tracks', 'Mentor Office Hours', 'Peer Learning', 'Offline Learning'],
    body: [
      { type: 'lede', text: 'A new term means a new cohort — and this one comes with more changes than usual. Based directly on feedback from the last few terms, we\'ve rebuilt several core parts of the experience: how the AI tutor explains things, what career tracks are available, how much live human support you get, and how your certifications actually hold up once you\'re job-hunting.' },
      { type: 'p', text: 'Here\'s exactly what\'s different, whether you\'re returning for another term or joining Maieutic Edutech for the very first time.' },
      { type: 'p', text: 'None of these changes are cosmetic. Each one maps directly to a specific piece of feedback we heard repeatedly across the last several cohorts — from completion rates to how confidently graduates could point to a credential during interviews.' },

      { type: 'h2', kicker: 'What\'s new — 01', text: 'AI Tutor 2.0: Sharper Explanations, New Voice Mode' },
      { type: 'p', text: 'The AI tutor has been rebuilt from the ground up this term. It now maintains context across an entire course instead of just a single session, so it remembers where you struggled last week and adjusts accordingly.' },
      { type: 'ul', items: [
        '**Voice mode:** ask questions out loud and get spoken explanations back — useful for reviewing on a commute or between classes.',
        '**Multi-step reasoning:** the tutor now shows its work for harder problems instead of just delivering a final answer.',
        '**Cross-course memory:** it connects concepts across different courses you\'re taking, instead of treating each one in isolation.',
        '**Confidence-aware pacing:** if you breeze through a topic, it speeds up; if you\'re clearly guessing, it slows down and re-explains before moving on.',
      ] },

      { type: 'h2', kicker: 'What\'s new — 02', text: 'Three Brand-New Career-Aligned Tracks' },
      { type: 'p', text: 'Based on demand from the last two cohorts, we\'ve launched three new specialization tracks: **Data & AI**, **Product Design**, and **Cloud & DevOps**. Each one was built in direct consultation with hiring partners, so the skills map to real job postings rather than a generic curriculum.' },
      { type: 'cards', items: [
        { title: 'Data & AI', text: 'Mentored by data scientists and ML engineers currently working at mid-size and enterprise companies.' },
        { title: 'Product Design', text: 'Mentored by designers who have shipped consumer products used by millions, now reviewing student portfolios directly.' },
        { title: 'Cloud & DevOps', text: 'Mentored by practitioners holding active certifications across major cloud providers, running live infrastructure debugging sessions.' },
      ] },
      { type: 'p', text: '**What\'s included:** a mapped sequence of courses, hands-on projects reviewed by mentors, and a capstone project you can point to directly in interviews. Enrollment in any of the three new tracks is open to both new and returning students — you don\'t need to restart your existing progress to add one.' },
      { type: 'quote', text: 'Built with hiring partners, not guessed at from a curriculum committee.' },

      { type: 'h2', kicker: 'What\'s new — 03', text: 'Live Mentor Office Hours, Every Week' },
      { type: 'p', text: 'Previous cohorts only had access to async support — forum posts and email. This term, every student gets a standing weekly live session with an industry mentor, on top of the AI tutor.' },
      { type: 'ul', items: [
        'Small-group format, capped so you actually get airtime, not a lecture.',
        'Recorded automatically if your time zone doesn\'t line up — nothing is missed.',
        'Mentors are working professionals in the field you\'re studying, not generalist TAs.',
      ] },
      { type: 'quote', text: 'Isolation, not difficulty, is usually what makes students quietly disappear.' },
      { type: 'table', head: ['Last term', 'This term'], rows: [
        ['Async-only support', 'Weekly live mentor office hours'],
        ['Study solo', 'Matched peer learning circles'],
        ['PDF certificate', 'Blockchain-verified digital credential'],
        ['App needs signal', 'Fully offline-capable app'],
        ['Single-session AI tutor', 'AI Tutor 2.0 with cross-course memory'],
      ] },

      { type: 'h2', text: 'This Cohort, by the Numbers' },
      { type: 'stats', items: [
        { value: '92%', label: 'completion rate for students matched into a peer circle (beta), vs 61% solo-paced last term' },
        { value: '40+', label: 'mentors onboarded across the three new tracks, all working in the field they mentor' },
        { value: '3', label: 'hiring partners consulted directly on the new curricula' },
        { value: '100%', label: 'offline coverage for core lessons and flashcard decks in the redesigned app' },
      ] },

      { type: 'h2', kicker: 'What\'s new — 04', text: 'Peer Learning Circles Replace Solo Study' },
      { type: 'p', text: 'Completion rates were the single biggest thing we wanted to fix this term. The fix: small peer circles of 5–6 students who move through the material together, with shared milestones and light accountability check-ins.' },
      { type: 'p', text: '**Why it matters:** students studying in a circle finish courses at meaningfully higher rates than those studying entirely solo — isolation, not difficulty, is usually what causes people to quietly drop off.' },

      { type: 'h2', kicker: 'What\'s new — 05', text: 'Refreshed Certifications, Now Blockchain-Verified' },
      { type: 'p', text: 'Certificates from this cohort onward are issued with a verifiable digital credential attached, so employers can confirm authenticity directly instead of taking a PDF at face value.' },
      { type: 'ul', items: [
        'Shareable directly to LinkedIn with one click.',
        'Includes a skills breakdown, not just a course title.',
        'Old certificates remain valid — this only applies going forward.',
      ] },

      { type: 'h2', kicker: 'What\'s new — 06', text: 'The Mobile App Now Works Fully Offline' },
      { type: 'p', text: 'Previously, patchy internet meant a paused lesson. The redesigned mobile app now caches full lessons, quizzes, and flashcard decks locally, so a subway commute or a rural weekend doesn\'t cost you study time.' },
      { type: 'p', text: '**Why it matters:** this was consistently the top-requested fix from students outside major cities — access shouldn\'t depend on signal strength.' },
      { type: 'quote', text: 'The peer circle is the reason I actually finished this time — last term I just quietly stopped logging in.', cite: 'A returning student, on the beta test of this cohort\'s changes' },

      { type: 'h2', text: 'Questions Students Are Already Asking' },
      { type: 'faq', items: [
        { q: 'Do I have to switch tracks to get the new features?', a: 'No — AI Tutor 2.0, office hours, peer circles, and the offline app apply to every track automatically, including ones you were already enrolled in.' },
        { q: 'Is there an extra cost for office hours or peer circles?', a: 'No, both are included in standard enrollment for this cohort at no additional charge.' },
        { q: 'What happens to my old certificate if I already graduated?', a: 'It stays fully valid. The new verification layer applies to certificates issued from this cohort onward, not retroactively.' },
        { q: 'Can I switch peer circles if the schedule doesn\'t work?', a: 'Yes — you can request a reassignment during the first week of the term with no penalty, though most students find their default match works fine.' },
      ] },

      { type: 'h2', text: 'Enrolment Details for This Cohort' },
      { type: 'ul', items: [
        '**Enrollment window:** open now through the start of the term — spots in mentor-led tracks are capped, so early enrollment matters more than in past terms.',
        '**Pricing:** standard tuition is unchanged; office hours, peer circles, and the offline app are included at no extra cost.',
        '**Returning students:** all new features apply automatically to your existing enrollment — there is nothing you need to re-purchase or re-enrol in.',
      ] },

      { type: 'h2', text: 'How to Get Started This Term' },
      { type: 'p', text: 'If you\'re a returning student, all the above is already live on your account — no action needed beyond logging in. If you\'re new:' },
      { type: 'ol', items: [
        '**Pick a track.** Choose one of the existing programs or one of the three new specializations.',
        '**Get matched to a peer circle.** This happens automatically in your first week based on your schedule and goals.',
        '**Attend your first office hours session.** It\'s on the calendar as soon as you enroll.',
        '**Download the app.** Set your offline downloads before you need them, not after you lose signal.',
      ] },

      { type: 'h2', text: 'Where Maieutic Edutech Fits In' },
      { type: 'p', text: 'Every change this term came from the same place: students told us where the experience was falling short, and we rebuilt that specific part rather than adding features for their own sake. We\'ll keep doing this every term — the next round of changes is already being shaped by what this cohort tells us.' },
      { type: 'callout', title: 'Ready to join the new cohort?', tone: 'warm', text: 'Reserve your spot before enrollment closes. Questions about this term\'s changes? Reach out to your student success team — they\'re expecting to hear from you.' },
    ],
  },
];

/** Editorial posts above + the service-line posts generated from the blog content pack. */
export const blogs = [...editorialBlogs, ...serviceBlogs];

/* ─── Helpers ───────────────────────────────────────────────────────────── */

const WORDS_PER_MINUTE = 200;

const blockText = (b) => {
  switch (b.type) {
    case 'ul': case 'ol': return b.items.join(' ');
    case 'table': return [...b.head, ...b.rows.flat()].join(' ');
    case 'stats': return b.items.map((i) => `${i.value} ${i.label}`).join(' ');
    case 'cards': return b.items.map((i) => `${i.title} ${i.text}`).join(' ');
    case 'faq': return b.items.map((i) => `${i.q} ${i.a}`).join(' ');
    case 'callout': return `${b.title || ''} ${b.text}`;
    case 'figure': return b.caption || '';
    default: return b.text || '';
  }
};

export const wordCount = (post) =>
  post.body.reduce((n, b) => n + blockText(b).split(/\s+/).filter(Boolean).length, 0);

/** "7 min read" — computed from the article body. */
export const readTime = (post) => `${Math.max(1, Math.round(wordCount(post) / WORDS_PER_MINUTE))} min read`;

export const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const getBlog = (slug) => blogs.find((b) => b.slug === slug);

/** Newest first, using dateISO. */
export const sortedBlogs = [...blogs].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

export const categories = ['All', ...Array.from(new Set(blogs.map((b) => b.tag)))];

export const BLOG_BASE = '/resources/blogs-insights';
export const SITE_URL  = 'https://maieuticedutech.com';
