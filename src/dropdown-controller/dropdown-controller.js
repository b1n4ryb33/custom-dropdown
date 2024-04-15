import "./dropdown.css";

const dropdownController = (() => {
  const _dropdownItemsState = new WeakMap();

  const initialize = (selector = "div.dropdown-container") => {
    document.querySelectorAll(selector).forEach((dropdownContainer) => {
      const itemListContainer = dropdownContainer.querySelector(
        ".dropdown-item-container",
      );
      const itemList = itemListContainer.querySelectorAll("span.dropdown-item");
      _dropdownItemsState.set(dropdownContainer, itemList);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            _updateDropdownItems(dropdownContainer);
          }
        });
      });

      observer.observe(itemListContainer, { childList: true });

      const dropdownTrigger = dropdownContainer.querySelector(
        "input.dropdown-trigger",
      );
      dropdownTrigger.addEventListener("click", _toggleDisplay);
    });
  };

  const _toggleDisplay = (event) => {
    const dropdownContainer = event.currentTarget.closest(
      ".dropdown-container",
    );

    if (!dropdownContainer) {
      console.error("Dropdown-Container wurde nicht gefunden.");
      return;
    }

    const itemList = _dropdownItemsState.get(dropdownContainer);
    itemList.forEach((item) => {
      item.classList.toggle("show");
    });
  };
  const _updateDropdownItems = (dropdownContainer) => {
    const itemList = dropdownContainer.querySelectorAll(
      ".dropdown-item-container span.dropdown-item",
    );
    _dropdownItemsState.set(dropdownContainer, itemList);
  };

  return { initialize };
})();

export { dropdownController };
