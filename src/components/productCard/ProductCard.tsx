import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { twMerge } from "tailwind-merge";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ProductCardProps {
  height: number;
  className?: string;
  id: string;
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
  variant = "small",
  productName,
  id,
  height,
  oldPrice,
  currentPrice,
  imageUrl,
}: ProductCardProps) => {
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primaryDarker ",
    outlined:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-whitePrimary",
  };

  const _className = twMerge(
    variantClasses[variant],
    className,
    "appearance-none  rounded-lg p-2 text-sm font-medium shadow transition-all "
  );

  return (
    <Link to={"/Product/" + id}>
      <Card className={className} sx={{ textAlign: "left" }}>
        <CardActionArea style={{ padding: 10, height: height }}>
          <img src={imageUrl} alt={productName} />
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
                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary" }}
                >
                  <s>{oldPrice}</s>
                </Typography>
              )}
              <Typography variant="h4">{"R$" + currentPrice}</Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ProductCard;
