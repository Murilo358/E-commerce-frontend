

type ServiceConfig = {
    direct: string;
    gateway: string;
  };
  
  type Config = {
    dev: {
      useGateway: boolean;
      services: Record<string, ServiceConfig>;
    };
    prod: {
      baseUrl: string;
      services: Record<string, string>;
    };
  };
  
  const config: Config = {
    dev: {
      useGateway: import.meta.env.VITE_USE_GATEWAY === "true",
      services: {
        product_service: {
          direct: "http://localhost:8081/",
          gateway: "http://localhost:8080/product-service/",
        },
        order_service: {
          direct: "http://localhost:8082/",
          gateway: "http://localhost:8080/order-service/",
        },
      },
    },
    prod: {
      baseUrl: "http://localhost:8080",
      services: {
        product_service: "/product-service/",
        order_service: "/order-service/",
      },
    },
  };

  
  const currentEnv = import.meta.env.VITE_ENV_PROFILE || "dev";

  
  const services = Object.fromEntries(
    Object.entries(config[currentEnv as keyof Config]?.services || {}).map(
      ([key, value]) => [
        key,
        currentEnv === "prod"
          ? `${config.prod.baseUrl}${value}`
          : config.dev.useGateway
          ? (value as ServiceConfig).gateway
          : (value as ServiceConfig).direct,
      ]
    )
  );
  
  export default {
    ...config[currentEnv as keyof Config],
    services,
  };