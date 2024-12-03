import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'


interface ProductCardProps {
  className?: string;
  productName: string;
  oldPrice?: string;
  currentPrice: string;
  imageUrl: string;
}

const ProductCard : React.FC<ProductCardProps> = ({ className, productName, oldPrice, currentPrice, imageUrl }) => {
  return (
    <Card className={className}  sx={{ maxWidth: 345, textAlign: 'left' }}>
      <CardActionArea style={{padding: 10}}>
        <CardMedia 
          component="img"
          height="150"
          image={imageUrl}
          alt={productName}
        />
        <CardContent >
          <Typography gutterBottom  component="div">
            {productName}
          </Typography>
          <div>
            {oldPrice && (
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                <s>{oldPrice}</s>
              </Typography>
            )}
            <Typography variant="h6">
              {"R$" + currentPrice}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard