import { useEffect } from "react";

const handleurl = (url) => {
  switch (url) {
    case "documents": {
      return require("../animations/documentPageAnimation");
    }
    case "team": {
      return require("../animations/teamPageAnimation");
    }
    case "fixedBot": {
      return require("../animations/fixedBot");
    }
    case "hero": {
      return require("../animations/heros");
    }
    case "token_info": {
      return require("../animations/tokenInfo");
    }
    default: {
      return require("../animations/fixedBot");
    }
  }
};
const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = handleurl(url);
    script.async = true;

    document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    // };
  }, [url]);
};

export default useScript;
