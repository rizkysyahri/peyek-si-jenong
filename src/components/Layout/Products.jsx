const Product = ({ id, image, title, subtitle, price }) => {
  return (
    <div className="container bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="group relative">
          <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={image}
              alt="peyek"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full max-w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
