import "../styles/OwnersPage.css";

function OwnersPage() {
    return (
        <div className="owners-page">

            <section className="owners-hero">
                <div className="owners-text">
                    <h2>Our Community</h2>
                    <h1>
                        Loving <span>Pet Owners</span>
                    </h1>
                    <p>
                        Meet the amazing people behind Pawtique who give our furry friends
                        safe, happy and loving homes every day.
                    </p>
                </div>

                <img
                    src="https://kb.rspca.org.au/assets/Images/cat-in-lap.jpg"
                    alt="Kitten in lap"
                />
            </section>

            <section className="owners-section">
                <img
                    src="https://www.helpguide.org/wp-content/uploads/2023/02/Joys-of-Owning-a-Cat.jpeg"
                    alt="Pet owner with cat"
                />

                <div>
                    <h2>
                        Meet the loving owners who have opened their hearts and homes to our furry friends.
                    </h2>
                    <p>
                        At Pawtique, we are proud to have a community of compassionate and
                        dedicated pet owners. Each owner has a unique story and a deep love
                        for their pets. From daily walks to cozy evenings at home, they go
                        above and beyond to ensure their pets are happy and healthy.
                    </p>
                </div>
            </section>

            <section className="owners-section">
                
                <div>
                    <h2>
                        Our owners are more than just pet parents - they are advocates, volunteers and friends to our cats.
                    </h2>
                    <p>
                        Many of our owners are actively involved in the cat community, volunteering at shelters,
                        fostering cats in need and advocating for animal welfare. They share their love for cats
                        with others and help spread awareness about the importance of adoption and responsible pet ownership.
                    </p>

                    <h3>
                        <span>Cash Stones</span>, Pawtique Owner
                    </h3>
                    <p>
                        "Adopting from Pawtique was the best decision I've ever made. My cat, Whiskers, has brought so much joy and love into my life. The team at Pawtique was incredibly supportive throughout the adoption process and continues to be a resource for me as a pet owner. I'm grateful to be part of such a wonderful community of cat lovers!"
                    </p>

                    <h4>
                        - Jane Doe, Pawtique Owner, Oakwood Street 347 976
                    </h4>
                </div>

                <img 
                    src="https://www.petfoodprocessing.net/ext/resources/Articles/2024/10%20Oct/100824_Mars-pet-parent-study_Lead.webp?t=1728390665&width=800" 
                    alt="Pet owner with cat" 
                />

            </section>

            <section className="owners-section">
                <img 
                    src="https://imageserver.petsbest.com/website/cat-owner-guide/cat-owners-guide.jpg" 
                    alt="Pet owner with cat" 
                />

                <div>
                    <h2>
                        Thank You, Our Amazing Owners!
                    </h2>
                    <p>
                        We are grateful for our amazing owners who make a difference in the lives of our cats every day.
                    </p>
                    <button>Join Our Community</button>
                </div>

            </section>

        </div>
    );
}

export default OwnersPage;