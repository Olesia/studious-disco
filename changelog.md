## [1.0.0] - 2019-07-11
### Added
- Product component
- Event OnBuy is realised
- ProductsService is realized and returns the list of products
- Product model and IProduct interface
- ProductList component
- Cart component
- Cart service is  realised and uses subling communication with product component
- Remove product from the cart and Total price calculation functionality is realised

## [2.0.0] - 2019-07-18
### Added
- New Modules: CartModule, ProductsModule, SharedModule
- ProductListComponent: Added check if product is available
- CartListComponent: Total count of products is added
- СartItemComponent is added. Change count of product functionality is realized.
- Template variable #appTitle is added. @ViewChild is used
- Styles for CartItemComponent are added. @HostBinding, @HostListener are used
- ngClass was used for changing color of unavailable product
- added functionality on click on buy button couple of times

### Updated
- ProductComponent is a presentation component and use Outputs now, changeDetection is changed.
- Buttton 'Buy' is inavailable if product does not exist
- Cart service calculations are changed
