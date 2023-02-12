interface ILayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className='bg-white'>
      <main className='mx-auto max-w-7xl'>{children}</main>
    </div>
  )
}
