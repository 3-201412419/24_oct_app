

export default function Home() {

  let goods = ['Tomatoes', 'Pasta', 'Coconut']
  let prices = [40,60,80];

let a =   prices.map((a,i) => {
      return 10
  })


  return (
      <div>
          <h4 className = "title" >상품 목록</h4>
        {
          goods.map((a,i) => {
          return (
            <div className = "food" key = {i}>
              <img src = {'/food' + i + '.png'} className = "food-img" />
              <h4> {a} {prices[i]} </h4>
            </div>
                )
          })
        }
      </div>
  );
}
