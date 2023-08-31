import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Abbie Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          <video controls autoplay name="media">
            <source src="https://n14.rcs.revma.com/cgvrymb6p98uv?rj-ttl=5&rj-tok=AAABikkIPREALfFF4_lf_ra1AA" type="audio/mpeg"></source>
          </video>


        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
