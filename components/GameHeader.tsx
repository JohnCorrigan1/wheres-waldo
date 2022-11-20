const GameHeader: React.FC = () => {
  return (
    <div className="flex justify-between p-3 pl-5 pr-5 w-full fixed bg-slate-800 bg-opacity-80">
        <div className="w-1/6">
      <h1 className="text-4xl font-semibold text-indigo-600">GameCube</h1>
      </div>
      <div className="w-1/6 flex justify-center">
        <h1 className="text-3xl text-zinc-100">10.6s</h1>
      </div>

      <div className="w-1/6 flex justify-end">
        <button className="bg-rose-400 p-2 pr-3 pl-3 rounded-md text-xl font-semibold hover:bg-rose-500 active:scale-95">Quit</button>
      </div>
    </div>
  );
};

export default GameHeader;
