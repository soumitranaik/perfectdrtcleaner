import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


export const useScroll = (thresh = 0.1) => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: thresh });

   
    useEffect(() => {
        if (view) {
          controls.start("show");
        } else {
          controls.start("hidden");
        }
      }, [view, controls]);
    return[element, controls];
}