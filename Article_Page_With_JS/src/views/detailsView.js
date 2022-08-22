import { html } from '../lib.js'

const detailsTemplate = () => html`
        <section class="detailsPage">
            <div class="backgroundText">
                <p>news</p>
            </div>
            <article>
                <div class="titleImage">
                    <img src="./assets/Main photo article.png" alt="">
                    <div class="articleTitle">
                        <p>Published / 20.09.2019</p>
                        <h4>London Games return in 2019</h4>
                        <h1>Register to receive the latest news on ticket sales for 
                            the four NBA London Games in 2019!</h1>
                        <a href="#"><i class="fas fa-share-alt"></i>Share</a>
                    </div>
                </div>
                
                <p>TOKYO — Major League Baseball begins its 2019 season on Wednesday in Japan with the first of two games between
                    the Oakland Athletics and the <span>Seattle Mariners</span>. NBA which equipe is the best? But when the teams take the field at the 
                    Tokyo Dome, don’t say they’re playing on foreign soil.</p> <br>
                <p>That’s because 12 tons of clay, silt and sand mixtures have been 
                    shipped by boat from the United States to make the batter’s box, pitcher’s mound, base pits and bullpens feel
                    like home. The dirt swap was news to the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp of approval
                    after starting the first of two exhibition games each club played against teams from <span>Japan’s Nippon Professional Baseball</span> as a tuneup.</p> <br>
                <p>“Oh, you mean we weren’t pitching on the same mound the Japanese teams use during their season?” Leake said Sunday. 
                    “It felt like the same mound that we pitch on in the States. The only thing I would say is that maybe they put a little too much water at first,
                    so some of the clay stuck to my spikes in the first inning, but that happens at home, too. After that, it was perfect.”</p> <br>
            </article>

            <div class="commentsContainer">
                <div class="commentsTitle">
                    <h3>Comments (2)</h3>
                    <div class="sortingCriteria">
                        <p>Sort by: Most popular</p>
                        <a href="#"><i class="fas fa-angle-down"></i></a>
                    </div>       
                </div>
                <div class="comments">
                    <div class="submitComment">
                        <img src="./assets/user_icon_1.png" alt="">
                        <input type="text" id="comment" name="comment" placeholder="Write a comment">
                        <input type="submit" id="submitBtn" value="Submit">
                    </div>
                    <div class="userComments">
                        <div class="comment">
                            <img src="./assets/user_icon_1.png" alt="">
                            <div class="commentText">
                                <h4>Baloh Ivan</h4>
                                <p id="date">Mar 15 <span id="edited">edited</span></p>
                                <p>Interesting article. Personally I am trying to slowly move away from Whatsapp as I am doing with Facebook.
                                    Most of the Whatsapp group I belong to are permanently on mute; otherwise.</p>
                                <hr>
                                <div class="commentReaction">
                                    <div class="likeDislike">
                                        <a href="#"><i class="far fa-thumbs-up"></i></a>
                                        <a href="#"><i class="far fa-thumbs-down"></i></a>
                                    </div>
                                    <div class="commentActions">
                                        <a href="#">Edit</a>
                                        <a href="#">Comment</a>
                                        <a href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="comment">
                            <img src="./assets/user_icon_2.png">
                            <div class="commentText">
                                <h4>Tom Chanter</h4>
                                <p id="date">Mar 15</p>
                                <p>Interesting article. Personally I am trying to slowly move away from Whatsapp as I am doing with Facebook.
                                    Most of the Whatsapp group I belong to are permanently on mute; otherwise.</p>
                                <hr>
                                <div class="commentReaction">
                                    <div class="likeDislike">
                                        <a href="#"><i class="far fa-thumbs-up"></i></i></a>
                                        <a href="#"><i class="far fa-thumbs-down"></i></a>
                                    </div>
                                    <div class="commentActions">
                                        <a href="#">Comment</a>
                                    </div>
                                </div>
                                <div class="comment">
                                    <img src="./assets/user_icon_1.png" alt="">
                                    <div class="commentText">
                                        <h4>Baloh Ivan</h4>
                                        <p id="date">Mar 15</p>
                                        <p>Interesting article. Personally I am trying to slowly move away from Whatsapp as I am doing with Facebook.
                                            Most of the Whatsapp group I belong to are permanently on mute; otherwise.</p>
                                        <hr>
                                        <div class="commentReaction">
                                            <div class="likeDislike">
                                                <a href="#"><i class="far fa-thumbs-up"></i></a>
                                                <a href="#"><i class="far fa-thumbs-down"></i></a>
                                            </div>
                                            <div class="commentActions">
                                                <a href="#">Edit</a>
                                                <a href="#">Comment</a>
                                                <a href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="showMore">
                    <p>Show More</p>
                    <a href="#"><i class="fas fa-angle-down"></i></a>
                </div>
            </div>

            <div class="moreArticles">
                <div class="moreArticlesTitle">
                    <hr>
                    <h2>More Articles</h2>
                </div>
                <div class="articleContainer">
                    <div class="article">
                        <img src="./assets/more_articles_1.png" alt="">
                        <div class="articleInfo">
                            <a href="#">Lorem ipsum</a>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div class="article">
                        <img src="./assets/more_articles_2.png" alt="">
                        <div class="articleInfo">
                            <a href="#">Lorem ipsum</a>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div class="article">
                        <img src="./assets/more_articles_3.png" alt="">
                        <div class="articleInfo">
                            <a href="#">Lorem ipsum</a>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div class="article">
                        <img src="./assets/more_articles_4.png" alt="">
                        <div class="articleInfo">
                            <a href="#">Lorem ipsum</a>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div class="article">
                        <img src="./assets/more_articles_5.png" alt="">
                        <div class="articleInfo">
                            <a href="#">Lorem ipsum</a>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                    <div class="article">
                        <img src="./assets/more_articles_6.png" alt="">
                        <div class="articleInfo">
                            <a href="#">Lorem ipsum</a>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        `; 

export function detailsView(ctx) {
    ctx.render(detailsTemplate());
}
