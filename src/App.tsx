import React from 'react'
import { Menu } from '@headlessui/react'
import tw from 'twin.macro'

const menuButtonStyles = [
  tw`px-3 py-2`,
  tw`text-lg`,
  tw`text-white bg-blue-600 hover:bg-blue-700`,
  tw`border-none`,
  tw`rounded`,
]

const menuItemsStyles = [
  tw`flex flex-col gap-2`,
  tw`mt-2 p-3 max-w-sm`,
  tw`border border-solid border-blue-400`,
  tw`rounded shadow-lg`,
]

const menuItemStyles = [
  tw`p-2`,
  tw`bg-blue-100 hover:bg-blue-200`,
  tw`rounded cursor-pointer`,
]

const menuItems = [
  'Menu Item 1',
  'Menu Item 2',
  'Menu Item 3',
]

const App = () => (
  <div>
    <Menu>
      <Menu.Button css={menuButtonStyles}>Menu</Menu.Button>
      <Menu.Items css={menuItemsStyles}>
        {
          menuItems.map(item => <Menu.Item css={menuItemStyles}><a>{item}</a></Menu.Item>)
        }
      </Menu.Items>
    </Menu>
  </div>
)

export default App
