import React from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { useProducts } from "../hooks/products";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

const ProductsPage = () => {
  const { product, loading, error, addProduct } = useProducts();
  const { open, modal, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {product.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {modal && (
        <Modal title="Create new product" onClose={() => close()}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        onClick={() => open()}
        className=" fixed bottom-5 right-5 bg-red-500  w-5 text-center text-2xl px-4 text-white rounded-full "
      >
        +
      </button>
    </div>
  );
};

export default ProductsPage;
