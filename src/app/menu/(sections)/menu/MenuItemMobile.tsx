import MenuItemDrawer from "@/components/drawer/MenuItemDrawer";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import { getCurrencySymbol } from "@/lib/get-currency-symbol";
import { getMenuItemById } from "@/lib/get-menu-item-by-id";
import Image from "next/image";
import type { FC } from "react";

interface MenuItemProps {
  id: string;
}

const MenuItemMobile: FC<MenuItemProps> = ({ id }) => {
  const { items } = useRestaurant();
  const { removeItem, updateItem, cartItems } = useCart();
  const item = getMenuItemById(id, items);
  return (
    item && (
      <div className="z-10 flex h-fit w-full flex-row items-center overflow-hidden bg-[#0F0F0F] px-4 py-4">
        <div className="flex w-[60%] flex-col items-start justify-between gap-4 p-[1rem] md:flex-row">
          <div className="flex w-full flex-col gap-[1.62rem]">
            <h2 className="w-full text-base font-semibold leading-[150%] text-[#FBEAD2]">
              {item.name}
            </h2>
            <p
              className="text-sm font-medium text-[#FBEAD2]"
              style={{ wordSpacing: "0.10rem" }}
            >
              {item.description}
            </p>
            <p className="text-[1.35rem] font-medium leading-[80%] text-[#FBEAD2]">
              {getCurrencySymbol(item.price.currency)}{" "}
              {formattedItemPrice(item.price.value)}
            </p>
          </div>
        </div>

        <div className="relative z-10 flex h-full w-[40%] py-4">
          {item.images[0] ? (
            <MenuItemDrawer item={item}>
              <Image
                src={item.images[0]}
                width={1980}
                height={1080}
                alt={item.name}
                className="z-10 h-[120px] w-full rounded-md object-cover"
              />
            </MenuItemDrawer>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#131313]">
              <Image
                src="/images/menu/items/item-placeholder.svg"
                alt="item-placeholder"
                width={106}
                height={108}
                className="z-10 h-[120] w-full rounded-md object-cover"
              />
            </div>
          )}
          <div className="absolute -bottom-2 z-50 flex w-full items-center justify-center">
            {cartItems.find((cartItem) => cartItem._idMenuItem === item._id) ===
              undefined ? (
              <MenuItemDrawer item={item}>
                <Button className="bottom-2 w-fit rounded-none bg-[#161616] text-[1.25rem] font-medium leading-[80%] text-primary hover:bg-[#141313]">
                  Add
                </Button>
              </MenuItemDrawer>
            ) : (
              <div className="flex h-fit w-fit items-center gap-3 bg-[#BC995D] p-2 text-black">
                <Button
                  className="h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent"
                  onClick={() => {
                    if (
                      cartItems.find(
                        (cartItem) => cartItem._idMenuItem === item._id,
                      )!.quantity <= 1
                    ) {
                      return removeItem(item._id);
                    }
                    updateItem(
                      item._id,
                      cartItems.find(
                        (cartItem) => cartItem._idMenuItem === item._id,
                      )!.quantity - 1,
                    );
                  }}
                >
                  <Icons.remove className="text-[#282828]" />
                </Button>
                {
                  cartItems.find(
                    (cartItem) => cartItem._idMenuItem === item._id,
                  )!.quantity
                }
                <Button
                  className="h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent"
                  onClick={() => {
                    updateItem(
                      item._id,
                      cartItems.find(
                        (cartItem) => cartItem._idMenuItem === item._id,
                      )!.quantity + 1,
                    );
                  }}
                >
                  <Icons.add className="text-[#282828]" />
                </Button>
              </div>
            )}
          </div>
        </div>

      </div>
    )
  );
};

export default MenuItemMobile;