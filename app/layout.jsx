import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Analytics } from "@vercel/analytics/next"
import 'nextra-theme-docs/style.css'

export const metadata = {
    "index": "Introduction",
    "another": "Another Page",
    "advanced": "Advanced (A Folder)",
    "about": {
        "title": "About",
        "type": "page"
    },
    "contact": {
        "title": "Contact ↗",
        "type": "page",
        "href": "https://twitter.com/shuding_",
        "newWindow": true
    }
}

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
    <Navbar
        logo={<b>😄 Hi Tutorials PH (っ˶ ˘ ᵕ˘)ˆᵕ ˆ˶ς) ‹𝟹</b>}
    />
)
const footer = <Footer>All rights reserved. {new Date().getFullYear()} © MIT.</Footer>

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    footer={footer}
                // ... Your additional layout options
                >
                    {children}
                    <Analytics />
                </Layout>
            </body>
        </html>
    )
}
