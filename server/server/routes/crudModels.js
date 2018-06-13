import Router from 'koa-router'

import beverage from '../db/models/beverage'
import fCourse from '../db/models/fCourse'
import sCourse from '../db/models/sCourse'


const models = {
  beverage,
  fCourse,
  sCourse
}




 



const crudRouter = new Router({prefix:'/api'})

crudRouter
  .get('/allProducts', async (ctx, next) => { //Получение всех
        
    const dataForReturn = {} 

    for(const modelName in models)
      dataForReturn[modelName] = await models[modelName].find()
    
    ctx.body = dataForReturn

  })
  .get('/:nameModel', async (ctx, next) => { //Получение по id

    

    if( !ctx.params.nameModel )
      ctx.throw(500,'nameModel cant be null')
    
    const { nameModel } = ctx.params

    if( Object.keys(models).indexOf(nameModel) === -1 )
      ctx.throw(500, `model ${nameModel} not found`)
    
    try {

      const model = models[ctx.params.nameModel];
      ctx.body = await model.find()

    } catch(e) {
      ctx.body = e
      console.log(e)
    }

  })
  .get('/:nameModel/:id', async (ctx, next) => { //Получение по id

    if( !ctx.params.nameModel && !ctx.params.id )
      ctx.throw(500,'id or nameModel cant be null')
    
    const { nameModel } = ctx.params

    if( Object.keys(models).indexOf(nameModel) === -1 )
      ctx.throw(500, `model ${nameModel} not found`)

    try {

      const model = models[nameModel];
      const _id = ctx.params.id;
      ctx.body = await model.find({ _id })

    } catch(e) {
      ctx.throw(500,e)
    }

  })
  .post('/',  async (ctx, next) => { // добавление/создание
    
    
    if(!ctx.request.body.name && !ctx.request.body.price && !ctx.request.body.nameModel){
      ctx.status = 500
      ctx.body = 'nameModel or price or name not send'
      return
    }
    try{
      const { nameModel, name, price } = ctx.request.body
      
      const newBev = new models[nameModel]({
        name: name,
        price:price,
      })

      const data = await newBev.save()

      ctx.body = data
      
    }catch(e){
      ctx.body = e
      console.log(e)
    }
  })
  .put('/:nameModel/:id', async (ctx, next) => { // изменение

    if( Object.keys(models).indexOf(nameModel) === -1 )
      ctx.throw(500, `model ${nameModel} not found`)

    try{
      const res = await models[nameModel].findByIdAndUpdate(ctx.params.id, { price: ctx.params.price })
    }catch(e){
      ctx.body = e
    }
  })
  .delete('/:nameModel/:id', async (ctx, next) => { // удаление
    
    if( Object.keys(models).indexOf(nameModel) === -1 )
      ctx.throw(500, `model ${nameModel} not found`)

    try{
      await beverage.findByIdAndRemove(ctx.params.id, (err, doc) =>{
        if (err)
          ctx.body = (err)
        else
          ctx.body = (200)
      } )
    }catch(e){
      ctx.body = e
    }
  })

export default crudRouter