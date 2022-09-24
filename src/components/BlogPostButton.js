import '../styles/BlogPostButton.css'

function BlogPost(props){
    const title = props.title;
    const description = props.description;
    const img = props.img;
    const href = props.href;
    const alt = props.imgalt;
    return (
        <div className="button">
            <div className="buttonWrap">
                <div className="buttonContent">
                    <a draggable="false" className="blogPostButton" href={href}>
                    <img className='buttonImage' src={img} alt={alt}>
                        
                    </img>
                    <div className="textWrap">
                        <span className="buttonTextTitle">
                            {title}
                        </span>
                        <span className="buttonTextDesc">
                            {description}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    );
}
             
export default BlogPost;