import './App.css'

export default function App() {
  const timelineData = [
    { year: 2008, repos: 10000, users: 100000, label: 'GitHub Launch Era' },
    { year: 2010, repos: 1000000, users: 1000000, label: 'Open Source Boom' },
    { year: 2012, repos: 3500000, users: 3000000, label: 'Developer Expansion' },
    { year: 2014, repos: 10000000, users: 10000000, label: 'Enterprise Adoption' },
    { year: 2016, repos: 25000000, users: 20000000, label: 'Global Collaboration' },
    { year: 2018, repos: 67000000, users: 31000000, label: 'Microsoft Acquisition' },
    { year: 2020, repos: 100000000, users: 56000000, label: 'Remote Development Era' },
    { year: 2022, repos: 200000000, users: 83000000, label: 'AI Assisted Coding' },
    { year: 2024, repos: 420000000, users: 100000000, label: 'Massive OSS Growth' },
    { year: 2026, repos: 650000000, users: 140000000, label: 'Future Collaborative AI' },
  ];

  const languageShare = [
    { name: 'JavaScript', value: 32 },
    { name: 'Python', value: 25 },
    { name: 'TypeScript', value: 18 },
    { name: 'Java', value: 10 },
    { name: 'Go', value: 8 },
    { name: 'Rust', value: 7 },
  ];

  const milestones = [
    {
      year: '2008',
      title: 'GitHub Founded',
      desc: 'GitHub launches and transforms collaborative development using Git.',
    },
    {
      year: '2012',
      title: 'Mass Open Source Movement',
      desc: 'Millions of repositories become available globally.',
    },
    {
      year: '2018',
      title: 'Microsoft Acquires GitHub',
      desc: 'GitHub enters a new enterprise and AI-driven phase.',
    },
    {
      year: '2023',
      title: 'AI Pair Programming',
      desc: 'GitHub Copilot accelerates developer productivity.',
    },
    {
      year: '2026',
      title: 'AI Collaborative Ecosystem',
      desc: 'Predicted era of intelligent global software collaboration.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            GitHub Code Sharing Evolution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-slate-300 text-lg max-w-3xl mx-auto"
          >
            Interactive visualization of GitHub growth, repository sharing, and developer collaboration from the beginning to 2026.
          </motion.p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedCard title="Repositories in 2026" value="650M+" />
          <AnimatedCard title="Global Developers" value="140M+" />
          <AnimatedCard title="Open Source Growth" value="65,000x" />
        </section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-slate-800"
        >
          <h2 className="text-3xl font-semibold mb-6">Repository & User Growth Timeline</h2>

          <div className="h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="repoGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '12px',
                  }}
                />
                <Legend />

                <Area
                  type="monotone"
                  dataKey="repos"
                  stroke="#22d3ee"
                  fillOpacity={1}
                  fill="url(#repoGradient)"
                  animationDuration={2500}
                  name="Repositories"
                />

                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#8b5cf6"
                  fillOpacity={1}
                  fill="url(#userGradient)"
                  animationDuration={3000}
                  name="Users"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-slate-900/70 rounded-3xl p-6 border border-slate-800"
          >
            <h2 className="text-2xl font-semibold mb-4">Popular Languages in Shared Repositories</h2>

            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageShare}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={120}
                    label
                    animationDuration={2200}
                  >
                    {languageShare.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={[
                          '#22d3ee',
                          '#8b5cf6',
                          '#f472b6',
                          '#facc15',
                          '#34d399',
                          '#fb923c',
                        ][index % 6]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-slate-900/70 rounded-3xl p-6 border border-slate-800"
          >
            <h2 className="text-2xl font-semibold mb-6">Historical Milestones</h2>

            <div className="space-y-5">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-cyan-400 font-bold">{item.year}</span>
                  </div>
                  <p className="text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 p-8"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">The Future of Code Sharing</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                GitHub evolved from a simple Git hosting platform into the largest collaborative software ecosystem in history.
                By 2026, AI-assisted development, cloud-native collaboration, and decentralized open-source communities define the next generation of software engineering.
              </p>
            </div>

            <motion.div
              animate={{
                rotate: [0, 4, -4, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="relative"
            >
              <div className="w-full h-72 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-3">
                  <div className="text-7xl">🚀</div>
                  <h3 className="text-3xl font-bold">AI + Open Source</h3>
                  <p className="text-slate-100">Future of collaborative coding</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function AnimatedCard({ title, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-xl"
    >
      <p className="text-slate-400 mb-2">{title}</p>
      <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
        {value}
      </h3>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
