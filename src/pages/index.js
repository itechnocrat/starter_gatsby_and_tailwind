import * as React from "react"
import monkey from "../images/monkey.jpg"
import "@fontsource/play"

const IndexPage = () => {
    return (
        <main>
            <title>Starter Gatsby and Tailwind</title>
            <div className="h-screen flex items-center justify-center bg-black">
                <div className="w-auto px-1 py-1 bg-white rounded-md">
                    <img
                        className="w-auto rounded-md"
                        src={monkey}
                        alt="Monkey"
                    />
                    <p className="text-center text-base xs:text-xs">
                        Человеки, глядя на вас, мне грустно!
                    </p>
                </div>
            </div>
        </main>
    )
}

export default IndexPage
