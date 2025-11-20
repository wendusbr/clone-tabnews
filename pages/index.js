import Image from 'next/image'

function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
        fontFamily:
          'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      }}
    >
      <h1 style={{ fontSize: '20px' }}>
        <Image src="/monker.png" width={20} height={20} /> MonkerDev
      </h1>
      <p>Em construção...</p>
      <p>
        Última atualização: <strong>19 de Novembro de 2025</strong>
      </p>
    </div>
  )
}

export default Home
