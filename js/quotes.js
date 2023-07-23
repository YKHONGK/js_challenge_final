const quotes = [
    {
      quote: "나라를 망하게 하는 것은 부정부패에 의한 민심의 離反이다.",
      author: "정약용",
    },
    {
      quote: "하루라도 책을 읽지 아니하면 입 속에 가시가 생길 것이다.",
      author: "안중근",
    },
    {
      quote:
        "진실은 반드시 따르는 자가 있고, 정의는 반드시 이루는 날이 있다.",
      author: "안창호",
    },
    {
      quote: "한 나라가 잘 되는 열쇠는 국어를 얼마나 사랑하느냐에 있다.",
      author: "주시경",
    },
    {
      quote: "맡겼으면 의심하지 말고, 의심이 있으면 맡기지 말아야 한다.",
      author: "세종대왕",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  
  function quotechange () {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
      quote.innerText = randomQuote.quote;
      author.innerText = randomQuote.author;
  }

  quotechange();
  setInterval(quotechange, 10000);