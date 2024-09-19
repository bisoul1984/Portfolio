export default function ProductDetails() {
    return (
        <div className="container my-4">
        <div className="row">
            <div className="col-md-4 text-center">
                <img src={"http://localhost:4000/images/" + product.imageFilename}
                    className="img-fluid mb-3" alt="..." width="250" />
            </div>
            <div className="col-md-8">
                <h3 className="mb-3">{product.name}</h3>
                <h3 className="mb-3">{product.price}$</h3>
                <button type="button" className="btn btn-warning btn-sm">
                    Add to Cart <i className="bi bi-cart4"></i>
                </button>

                <hr />

                <div className="row mb-3">
                    <div className="col-sm-3 fw-bold">
                        Brand
                    </div>
                    <div className="col-sm-9">
                        {product.brand}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-3 fw-bold">
                        Category
                    </div>
                    <div className="col-sm-9">
                        {product.category}
                    </div>
                </div>

                <div className="fw-bold">Description</div>
                <div style={{ whiteSpace: "pre-line" }}>
                    {product.description}
                </div>
            </div>
        </div>
    </div>
    )
}