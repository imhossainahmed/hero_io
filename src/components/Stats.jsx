
const Stats = () => {
  const stats = [
    { label: 'Total Downloads', value: '29.6M', desc: '21% More Than Last Month' },
    { label: 'Total Reviews', value: '906K', desc: '46% More Than Last Month' },
    { label: 'Active Apps', value: '132+', desc: '31 More Will Launch' },
  ];
  return (
  <section className="bg-[#8B5CF6] py-20 px-4 text-white">
    <div className="max-w-6xl mx-auto text-center space-y-12">
      <h2 className="text-4xl font-black">Trusted By Millions, Built For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <p className="text-white/70 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
            <div className="text-6xl font-black">{stat.value}</div>
            <p className="text-white/60 text-sm font-medium">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Stats;