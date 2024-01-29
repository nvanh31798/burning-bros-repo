import "@testing-library/jest-dom";
import { renderWithProviders } from "../../utils/utils-test";
import { ProductItem } from "../../client/features/product/component/ProductItem";
import { Product } from "../../core/redux/models/Product";

const mockProduct = {
    id: 1,
  title: 'test title',
  description: 'test description',
  price: 100,
  rating: 4.5,
  stock: 100,
  brand: 'test brand',
  category: 'test category',
  thumbnail: 'test thumbnail',
  images: ['test image1', 'test image2']
} as Product;

describe("ProductList Component", () => {
  it("product renders without crashing", () => {
    const { getByTestId } = renderWithProviders(
      <ProductItem testId="test-id" product={mockProduct} />
    );
    expect(getByTestId('test-id')).toBeInTheDocument();
  });

  it("title renders", () => {
    const { getByText } = renderWithProviders(
      <ProductItem testId="test-id" product={mockProduct} />
    );
    expect(getByText(mockProduct.title)).toBeInTheDocument();
  });

  it("price rendered", () => {
    const { getByText } = renderWithProviders(
      <ProductItem testId="test-id" product={mockProduct} />
    );
    expect(getByText(`$ ${mockProduct.price}`)).toBeInTheDocument();

  });

  it("test stock rendered", () => {
    const { getByText } = renderWithProviders(
      <ProductItem testId="test-id" product={mockProduct} />
    );
    expect(getByText(`${mockProduct.stock} items left`)).toBeInTheDocument();
  });
});
