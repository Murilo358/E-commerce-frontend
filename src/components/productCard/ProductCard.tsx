import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProductCardProps {
  height: number;
  className?: string;
  productName: string;
  oldPrice?: string;
  currentPrice: number;
  imageUrl: string;
}

interface ProductCardProps {
  variant?: "small" | "large";
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  variant = "primary",
  productName,
  height,
  oldPrice,
  currentPrice,
  imageUrl,
}: ProductCardProps) => {
  return (
    <Card className={className} sx={{ textAlign: "left" }}>
      <CardActionArea style={{ padding: 10, height: height }}>
        <CardMedia component="img" image={imageUrl} alt={productName} />
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            className="w-48  overflow-ellipsis break-words line-clamp-2"
            component="div"
          >
            {productName}
          </Typography>
          <div>
            {oldPrice && (
              <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                <s>{oldPrice}</s>
              </Typography>
            )}
            <Typography variant="h4">{"R$" + currentPrice}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
