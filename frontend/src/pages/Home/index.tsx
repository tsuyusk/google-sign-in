import { useCallback } from "react";
import { useDispatch } from "react-redux"
import { signOff } from "../../redux/features/user/user-slice";

export function Home() {
  const dispatch = useDispatch();

  const handleSignOff = useCallback(() => {
    dispatch(
      signOff()
    );
  }, [dispatch]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-800 text-white">
      <h1 className="text-xl font-bold">Home</h1>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md transition-all duration-150 cursor-pointer hover:bg-blue-700"
        onClick={handleSignOff}
      >
        Sign Off
      </button>
    </div>
  )
}
