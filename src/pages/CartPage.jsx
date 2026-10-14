import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CartPage() {
  return (
    <div className="cart-page d-flex min-vh-100 flex-column">
      <Header />
      <main className="flex-grow-1 d-flex align-items-center justify-content-center px-3 py-5 text-center">
        <div>
          <FaCartShopping className="mb-3 text-primary" size={36} aria-hidden="true" />
          <h1 className="h3">Your shopping cart</h1>
          <p className="text-secondary">Your cart is empty. Browse courses to find your next class.</p>
          <Link className="btn btn-primary" to="/courses">Browse courses</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
