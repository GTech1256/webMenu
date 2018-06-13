import Router from 'koa-router'

import authenticator from 'otplib/authenticator';
import crypto from 'crypto';

authenticator.options = { crypto };

const adminRoute = new Router({prefix:'/admin'})

const disabledIPs = [ //ip с ожиданием окончания unixTime для повторного ввода кода 
  {ip:0, unixTimeOut:0}
 ] 

adminRoute
  .post('/code', async (ctx, next) => {

    const unixNow = Math.round( new Date().getTime() / 1000.0 ) 

    // модель ответа
    const response = {
      unixTimeOut: unixNow + 30,
      login: false,
      message: ''
    }

    const userIP = ctx.request.ip

    // поиск по пользователям в таймАуте
    const didDisabledIp = disabledIPs.findIndex( (value) => value.ip === userIP )

    // в таймАуте 
    if(didDisabledIp > -1) {

      // если время таймАута вышло, то удаляет с disabledIPs
      if( disabledIPs[didDisabledIp].unixTimeOut <= unixNow ){
        console.log(disabledIPs, unixNow)
        disabledIPs.splice(didDisabledIp,1)
        
      }
      else {
        response.message = 'время не вышло'
        response.unixTimeOut = disabledIPs[didDisabledIp].unixTimeOut
        ctx.body = response
        return
      }
    }

    //проверка кода
    const token = authenticator.generate('RGAs6QgusSdLhX3wpYdLWsfN');
    const didTokenCorrect = ctx.request.body.token === token

    //код верен
    if( didTokenCorrect ){
      response.message = 'Добро Пожаловать' + userIP
      response.login = true
      ctx.body = response
      return
    }

    // код не верен
    disabledIPs.push({ ip: userIP, unixTimeOut: response.unixTimeOut })
    response.message = 'Код не верен'
    ctx.body = response

  })

export default adminRoute