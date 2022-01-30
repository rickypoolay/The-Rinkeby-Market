export const trunc = (firstStart, firstEnd, secondStart, secondEnd, string) => {
  const first = string
    ?.substring(firstStart, firstEnd)
    .concat(string.length > firstEnd ? `...` : ``);
  const second = string?.substring(
    string.length - secondStart,
    string.length - secondEnd
  );
  if (secondStart && secondEnd === null) {
    return first;
  } else {
    return first + second;
  }
};

export const fixURL = (url) => {
  if (url?.startsWith("ipfs")) {
    return (
      "https://ipfs.moralis.io:2053/ipfs/" + url.split("ipfs://ipfs/").slice(-1)
    );
  } else {
    return url + "?format=json";
  }
};
