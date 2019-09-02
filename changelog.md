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

## [3.0.0] - 2019-07-23
###Added
- Functionality: Clear cart
- Services: LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService,          GeneratorFactoryService(function) - according to the task
- Components: AboutComponent - demonstrate all services described above
- Directives: Font-changer - demonstrate using render2 and elementRef

## [4.0.0] - 2019-07-26
###Added
- Currency filters for all prices
- Date filter for updated date on app component
- Uppercase filter for product - category
- OrderByPipe filter for cart items, added select and checkbox to configure it

###Updated
- GetProducts to returns promise 

##[5.0.0] - 2019-09-02
###Added
- Routing for product-list
- Reviews component + routing
- Adding to the cart routing
- Remove from the cart routing
- Orders component + routing
- Admin + routing
- Admin functionality for changing of Products and viewing of orders
- Guard for resolving og edit product
- Login functionality
- Saving products and orders to Local storage
- Setting products to default list