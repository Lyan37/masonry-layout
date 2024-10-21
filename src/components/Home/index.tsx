import { useEffect, useState } from "preact/hooks";

type FooterProps = {};
function Footer({}: FooterProps) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlFooter = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlFooter);

      return () => {
        window.removeEventListener("scroll", controlFooter);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed bottom-0 flex items-center w-full sm:h-[10vw] h-[10vh] z-10 transition-transform duration-300 ease-out ${
        show ? "translate-y-0" : "translate-y-full"
      } animate-flicker mix-blend-overlay`}
    >
      <img src='src/assets/pinterest.svg'className='sm:w-[10vw] w-[8vh]'/>
      <p className='sm:text-[10vw] text-[8vh] font-thin'>Pinterest</p>
    </nav>
  );
}
const imagesList: string[] = [
  "https://i.pinimg.com/enabled_lo/564x/b5/d8/a4/b5d8a4bc88ff16403c78daad5287df8c.jpg",
  "https://i.pinimg.com/enabled_lo/564x/9e/72/2a/9e722ae4d5a28e8195e1a5cd37eb66c6.jpg",
  "https://i.pinimg.com/enabled_lo/564x/6c/fd/bd/6cfdbdf3eb0a553c127949eed1c8cf66.jpg",
  "https://i.pinimg.com/736x/b5/cb/6a/b5cb6a5834e037173d91938e03a09c6e.jpg",
  "https://i.pinimg.com/enabled_lo/564x/3e/23/80/3e23800f28e193c33f9a79a71d91ddca.jpg",
  "https://i.pinimg.com/enabled_lo/564x/e6/4b/45/e64b45dcbe16d9f9ac6f390e2e8a829d.jpg",
  "https://i.pinimg.com/enabled_lo/564x/ce/ef/37/ceef37ea376018d7c0bdde598ae5cfd5.jpg",
  "https://i.pinimg.com/enabled_lo/564x/ce/c2/45/cec245bbc915f324a3d5faccb8d3e324.jpg",
  "https://i.pinimg.com/originals/af/8d/9a/af8d9a28ec64497f39f5c814ea101c3b.gif",
  "https://i.pinimg.com/enabled_lo/564x/e4/e6/70/e4e67010e0085a0a5c25c21483272300.jpg",
  "https://i.pinimg.com/enabled_lo/564x/06/24/d3/0624d330276b6c0df9bcd4c8fc3269e8.jpg",
  "https://i.pinimg.com/enabled_lo/564x/11/3e/68/113e68a479ebed6c02e0ace3ceb8359e.jpg",
  "https://i.pinimg.com/enabled_lo/564x/3f/c7/05/3fc705e80130886dc24d500ed5c3313e.jpg",
  "https://i.pinimg.com/736x/5b/be/11/5bbe11c5a2227db38daeed066842e7f9.jpg",
  "https://i.pinimg.com/736x/4c/f2/63/4cf263d42f00ecbe537d9a2552151069.jpg",
  "https://i.pinimg.com/originals/ad/7a/1a/ad7a1aa6d885fd7c5f1b24a25c474e67.gif",
  "https://i.pinimg.com/enabled_lo/564x/ff/da/0c/ffda0c330b3be8cacb8ae25b1bdcc344.jpg",
  "https://i.pinimg.com/enabled_lo/564x/42/e1/d6/42e1d6cf2b50c427065db4e634edda7d.jpg",
  "https://i.pinimg.com/736x/0c/4a/8c/0c4a8c8bd160bddb029995656b2480bf.jpg",
  "https://i.pinimg.com/enabled_lo/564x/67/00/61/6700615e1972b305e0bab1fa7d107174.jpg",
  "https://i.pinimg.com/enabled_lo/564x/96/12/39/96123917d4f4b97fa4056b116ce6202c.jpg",
  "https://i.pinimg.com/originals/10/e1/e2/10e1e23a2062e8cda9b215a387dc4194.gif",
  "https://i.pinimg.com/enabled_lo/564x/a8/64/c7/a864c746932b02adf3d634474dfc9ba1.jpg",
  "https://i.pinimg.com/enabled_lo/564x/15/90/af/1590af46929d9cd00865bacd5d33f90f.jpg",
  "https://i.pinimg.com/originals/bb/80/94/bb80944d27b353f34d8c8777ec3b2b99.gif",
  "https://i.pinimg.com/originals/ed/f3/0b/edf30b7ad0f9a592e0385ab238da0f9d.gif",
  "https://i.pinimg.com/736x/aa/c8/08/aac8081a70302b02c9fa6c935dab830a.jpg",
  "https://i.pinimg.com/enabled_lo/564x/a0/cf/85/a0cf85b4f40a631a98c2eed7eaea92bf.jpg",
];

type MasonryProps = {};
function Masonry({}: MasonryProps) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffleArray = (array: string[]) => {
      let shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    setImages(shuffleArray(imagesList));
  }, []);

  return (
    <div className="w-full sm:columns-3 columns-2 gap-0">
      {images.map((img) => (
        <img
          src={img}
          className="sm:w-[33.33vw] w-[50vw]"
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Footer />
      <Masonry />
    </>
  );
}
