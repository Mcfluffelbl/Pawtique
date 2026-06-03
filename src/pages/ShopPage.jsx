import "../styles/ShopPage.css";

import {
  Search,
  Cart,
  Heart,
  Truck,
  ShieldCheck,
  ArrowRepeat,
} from "react-bootstrap-icons";

function ShopPage() {
  return (
    <div className="shop-page">

      <section className="shop-hero">

        <div className="shop-hero-text">

          <h1>
            Shop Our <span>Cat Favorites</span>
          </h1>

          <p>
            Quality products for happy, healthy cats.
          </p>

          <button>
            <Cart />
            Shop Now
          </button>

        </div>

        <img
          src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop"
          alt="Cute cat"
        />

      </section>

      <section className="shop-controls">

        <div className="categories">

          <button className="active">
            All Products
          </button>

          <button>Food</button>
          <button>Treats</button>
          <button>Toys</button>
          <button>Beds</button>
          <button>Accessories</button>

        </div>

        <div className="search-bar">

          <input
            type="text"
            placeholder="Search products..."
          />

          <Search />

        </div>

      </section>

      <section className="products-grid">

        <div className="product-card">

          <div className="wishlist">
            <Heart />
          </div>

          <img
            src="https://media.zooplus.com/bilder/7/400/71629_pla_whiskas_1_huhn_7kg_1000x1000_hs_01_7.jpg?width=400&format=webp"
            alt="Cat food"
          />

          <div className="product-info">

            <h3>Whiskas Crunch Food</h3>

            <p>Premium chicken recipe for cats.</p>

            <div className="price-row">
              <h4>$24.99</h4>
              <span>⭐⭐⭐⭐</span>
            </div>

            <button>Add to Cart</button>

          </div>

        </div>

        <div className="product-card">

          <div className="wishlist">
            <Heart />
          </div>

          <img
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQuu-jEqDTa4LLSC2Q9XOyzOxDrK7GOaAgQPlwwpEBmQEaYYoRgEU77IDpQ_DTVuVE6Iwwa-lRKh9hL_zyis_I0Km4fGggpnF61VEf-KFd14uyG4vhSzHsAGdM03fOrsL5s6lbfDGpFmTc&usqp=CAc"
            alt="Toy"
          />

          <div className="product-info">

            <h3>Feather Teaser Toy</h3>

            <p>Interactive fun toy for playful cats.</p>

            <div className="price-row">
              <h4>$8.99</h4>
              <span>⭐⭐⭐⭐⭐</span>
            </div>

            <button>Add to Cart</button>

          </div>

        </div>

        <div className="product-card">

          <div className="wishlist">
            <Heart />
          </div>

          <img
            src="https://media.zooplus.com/bilder/1/400/481718_pla_tiaki_cat_cave_harry_fg_4328_1.jpg?width=400&format=webp"
            alt="Bed"
          />

          <div className="product-info">

            <h3>Cozy Plush Bed</h3>

            <p>Ultra soft bed for cozy cat naps.</p>

            <div className="price-row">
              <h4>$29.99</h4>
              <span>⭐⭐⭐</span>
            </div>

            <button>Add to Cart</button>

          </div>

        </div>

        <div className="product-card">

          <div className="wishlist">
            <Heart />
          </div>

          <img
            src="https://i.etsystatic.com/10293093/r/il/b65a37/3417096872/il_570xN.3417096872_awcp.jpg"
            alt="Collar"
          />

          <div className="product-info">

            <h3>Pink Paw Collar</h3>

            <p>Stylish and comfy cat accessory.</p>

            <div className="price-row">
              <h4>$9.99</h4>
              <span>⭐⭐⭐⭐</span>
            </div>

            <button>Add to Cart</button>

          </div>

        </div>

      </section>

      <section className="shop-features">

        <div className="feature-box">
          <Truck />
          <div>
            <h4>Free Shipping</h4>
            <p>On orders over $49</p>
          </div>
        </div>

        <div className="feature-box">
          <ShieldCheck />
          <div>
            <h4>Secure Payment</h4>
            <p>100% safe & secure</p>
          </div>
        </div>

        <div className="feature-box">
          <ArrowRepeat />
          <div>
            <h4>Easy Returns</h4>
            <p>30-day return policy</p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default ShopPage;