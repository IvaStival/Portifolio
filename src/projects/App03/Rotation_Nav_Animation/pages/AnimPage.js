import { useState } from "react";
import './index.css'

const AnimPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenClick = () => {
        setIsOpen(true)
    }

    const handleCloseClick = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <div className={`container ${isOpen ? 'show-nav' : ''}`}>
                <div className="circle-container">
                    <div className="circle">
                        <button onClick={handleCloseClick} id='close'>
                            <i className="fas fa-times"></i>
                        </button>
                        <button onClick={handleOpenClick} id='open'>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                </div>

                <div className="content">
                    <h1>Amazing Article</h1>
                    <small>Florin Pop</small>
                    <p>Lorem ipsum dolor sit amet. Et laboriosam molestias ut harum voluptatibus qui repellendus animi qui totam dicta qui aliquid totam et voluptatibus magnam quo dolorem autem. Sit omnis illo sed inventore esse eos voluptatem mollitia est explicabo accusamus hic quia beatae. Vel possimus dolorum aut galisum ullam ut dolore voluptas est corrupti sunt. Quo consequatur magnam non magni vitae sit reiciendis omnis ut voluptatibus libero.
                        Sit quia praesentium cum temporibus blanditiis aut recusandae temporibus non voluptas iusto ut quibusdam nihil aut voluptatem officia? Non nesciunt illum sed tenetur excepturi sit vero sint At facilis rerum sed quis voluptates et quas perspiciatis.
                        Quo iure illum qui fugiat beatae est dignissimos possimus ea velit perferendis. Eos nihil esse sed expedita galisum ut molestiae animi et quae dignissimos vel commodi velit. Et facilis dolorem eos ipsa consequatur sed alias itaque ad placeat eveniet et excepturi obcaecati!
                        Hic vitae corporis ut expedita quae id quaerat omnis ea distinctio animi At eveniet corrupti vel quas placeat! Non possimus sint eos consequatur omnis et fugiat sint id vero vero nam dignissimos error ea expedita dolorem quo adipisci sequi?</p>
                    <h3>My Dog</h3>
                    <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="doggy" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><i className="fas fa-home"></i>Home</li>
                    <li><i className="fas fa-user-alt"></i>About</li>
                    <li><i className="fas fa-envelope"></i>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default AnimPage;