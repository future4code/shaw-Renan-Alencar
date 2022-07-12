
import performPurchase from "../src"
import { User } from "../src/model/User"

describe("primeito teste", () => {

  test("1 Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100
    }
  
    const result = performPurchase(user, 40)
    
    expect(result).toEqual({
      name: "Astrodev",
      balance: 60
    })
  })


  test("2 Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 50
    }
  
    const result = performPurchase(user, 50)
    
    expect(result).toEqual({
      ...user,
      balance: 0
    })
  })

  test("3 Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 30
    }
  
    const result = performPurchase(user, 50)
    
    expect(result).not.toBeDefined()
  })
})