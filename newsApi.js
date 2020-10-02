// const axios = require("axios")

const apikey = "f1956b53a5004d7fa8856fd0516cd541";

function news(country) {

    // using axios to fetch data from newsapi.org
    axios
        .get(
            `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`
        )
        .then((response) => {

            // getting section element
            let $section = document.querySelector("section")
            $section.style.paddingTop = "50px"
            // removing elements from section element
            $section.innerHTML = ""

            if (response.data.articles.length) {
                // looping over each news adn creating newws card for each news
                response.data.articles.forEach(news => {

                    // will only show news if all the three info are available
                    if (news.urlToImage && news.content && news.title) {
                        // creating div element hich will hold each news seperately
                        let $div = document.createElement("div")
                        // cretaing image element and adding he url returned by api
                        let $image = document.createElement("img")
                        $image.setAttribute("src", news.urlToImage)
                        $image.setAttribute("alt", news.author)
                        $div.appendChild($image)
                        // creating h3 tag and adding text node into it so to add title of news
                        let $title = document.createElement("h3")
                        let $titleText = document.createTextNode(news.title)
                        $title.appendChild($titleText)
                        $div.appendChild($title)
                        // creating p tg for holding short descripion of news
                        let $desc = document.createElement("p")
                        let $descText = document.createTextNode(news.content)
                        $desc.appendChild($descText)
                        $div.appendChild($desc)

                        //creating span
                        // <span class="button">Read More</span>
                        let $span = document.createElement("span")
                        $span.classList = "button"
                        $span.appendChild(document.createTextNode("Read More"))
                        $div.appendChild($span)

                        $section.appendChild($div)
                    }

                });
            } else {
                // if news is not availble the below element will be rendered
                let $div = document.createElement("main")
                $div.style.display = "inline-block"
                $div.style.marginLeft = "auto"
                $div.style.marginRight = "auto"
                $div.style.paddingBottom = "50px"
                let $title = document.createElement("h2")
                let $titleText = document.createTextNode(`Sorry! No news available right now. Please come back later`)
                $title.appendChild($titleText)
                $div.appendChild($title)
                $section.appendChild($div)
            }

        })
        .catch((reject) => console.log(reject));
}

export {
    news
};