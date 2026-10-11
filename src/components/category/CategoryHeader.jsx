const categories = {
  chal: { name: "চাল", icon: "🍚" },
  dal: { name: "ডাল", icon: "🫘" },
  tel: { name: "তেল", icon: "🛢️" },
  sobji: { name: "সবজি", icon: "🥬" },
  mach: { name: "মাছ", icon: "🐟" },
  mangsho: { name: "মাংস", icon: "🍗" },
  "dim-dui": { name: "ডিম-দুধ", icon: "🥛" },
  mosla: { name: "মসলা", icon: "🌶️" },
};

const CategoryHeader = ({ slug, count }) => {
  const category = categories[slug] || {
    name: slug,
    icon: "🛒",
  };

  return (
    <header className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f5f0] text-2xl">
        {category.icon}
      </div>

      <div>
        <h1 className="text-lg font-bold text-gray-800">{category.name}</h1>

        <p className="mt-0.5 text-xs text-gray-500">
          {count}টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
      </div>
    </header>
  );
};

export default CategoryHeader;
