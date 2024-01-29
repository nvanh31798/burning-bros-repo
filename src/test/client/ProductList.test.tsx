import "@testing-library/jest-dom";
import { ProductList } from "../../client/features/product/component/ProductList";
import { renderWithProviders } from "../../utils/utils-test";
import { TestID } from "../../core/constant/testId";

describe("ProductList Component", () => {
  beforeEach(() => {});

  afterEach(() => {});

  it("renders without crashing", () => {
    const { getByTestId } = renderWithProviders(<ProductList />);
    expect(getByTestId(TestID.PRODUCT_LIST)).toBeInTheDocument();
  });

  test("product items render without crashing", () => {
    const { getByTestId } = renderWithProviders(<ProductList />, {});
    expect(getByTestId(TestID.PRODUCT_ITEM + "_1")).toBeInTheDocument();
  });

  test("product items render enough items", () => {
    const { getByTestId } = renderWithProviders(<ProductList />, {});
    expect(getByTestId(TestID.PRODUCT_ITEM + "_19")).toBeInTheDocument();
  });

  test("product items render enough items", () => {
    const { getByTestId } = renderWithProviders(<ProductList />, {});
    expect(getByTestId(TestID.PRODUCT_ITEM + "_19")).toBeInTheDocument();
  });

});
