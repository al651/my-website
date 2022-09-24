import '../styles/Blog.css';
import websiteIcon from '../images/website_icon.png'
import BlogPost from "../components/BlogPostButton";

const blogPosts = [ /* boilerplate table format: { title: '', description: '', img:  , imgalt: '', href: '' } */
    { title: 'Website', description: 'Welcome to my website. It took a lot of effort to create as I wanted the website to not use a template so I had to make everything from scratch.', img: websiteIcon, imgalt: 'A computer cursor clicking a rounded edge rectangle that has the text "WWW." inside.', href: '/24-09-2022-website-post' },
    { title: 'Website', description: 'Welcome to my website. It took a lot of effort to create as I wanted the website to not use a template so I had to make everything from scratch.', img: websiteIcon, imgalt: 'A computer cursor clicking a rounded edge rectangle that has the text "WWW." inside.', href: '/24-09-2022-website-post' }
]

function Blog() {
    return (
        <div className="blog-posts">
        {
            blogPosts.map((post) => 
            <BlogPost title={post.title} description={post.description} img={post.img} href={post.href} alt={post.imgalt} />
            )
        }
        </div>
    );
}

export default Blog;