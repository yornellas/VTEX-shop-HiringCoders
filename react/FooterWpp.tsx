import React from 'react'

function FooterWpp() {
  return (
    <div className="flex justify-center w-100 flex-row bg-action-secondary pt5">
      <div className="flex flex-column items-center mh6 white-50">
        <a className="grow-large">
          <img
            width="24px"
            src="https://image.flaticon.com/icons/png/512/64/64572.png"
          />
        </a>
        <p>PERFIL</p>
      </div>
      <div className="flex flex-column items-center mh6 white-50">
        <a className="grow-large">
          <img
            width="24px"
            src="https://img-premium.flaticon.com/png/512/2804/premium/2804279.png?token=exp=1629409384~hmac=629c5246fb361ded794dc6b6befe7d8c"
          />
        </a>
        <p>DESAFIOS</p>
      </div>
      <div className="flex flex-column items-center mh6 white-50">
        <a className="grow-large">
          <img
            width="24px"
            src="https://image.flaticon.com/icons/png/512/2224/2224411.png"
          />
        </a>
        <p>LOJA</p>
      </div>
      <div className="flex flex-column items-center mh6 white-50">
        <a
          href="https://api.whatsapp.com/send?phone=5531996065135&text=Ol%C3%A1%2C%20gostaria%20de%20suporte%20relacionado%20a%20"
          className="grow-large"
        >
          <img
            width="24px"
            src="https://image.flaticon.com/icons/png/512/1384/1384162.png"
          />
        </a>
        <p>SUPORTE</p>
      </div>
    </div>
  )
}

export default FooterWpp
