USE [master]
GO
/****** Object:  Database [springleaf_restaurant]    Script Date: 10/25/2023 6:32:19 AM ******/
CREATE DATABASE [springleaf_restaurant]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'springleaf_restaurant3', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\springleaf_restaurant3.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'springleaf_restaurant3_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\springleaf_restaurant3_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [springleaf_restaurant] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [springleaf_restaurant].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [springleaf_restaurant] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET ARITHABORT OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [springleaf_restaurant] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [springleaf_restaurant] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET  ENABLE_BROKER 
GO
ALTER DATABASE [springleaf_restaurant] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [springleaf_restaurant] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET RECOVERY FULL 
GO
ALTER DATABASE [springleaf_restaurant] SET  MULTI_USER 
GO
ALTER DATABASE [springleaf_restaurant] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [springleaf_restaurant] SET DB_CHAINING OFF 
GO
ALTER DATABASE [springleaf_restaurant] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [springleaf_restaurant] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [springleaf_restaurant] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [springleaf_restaurant] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'springleaf_restaurant', N'ON'
GO
ALTER DATABASE [springleaf_restaurant] SET QUERY_STORE = OFF
GO
USE [springleaf_restaurant]
GO
/****** Object:  Table [dbo].[Bill_Details]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bill_Details](
	[bill_detail_id] [bigint] IDENTITY(1,1) NOT NULL,
	[menu_item_id] [bigint] NULL,
	[quantity] [bigint] NULL,
	[bill_id] [bigint] NULL,
 CONSTRAINT [PK_BillDetails] PRIMARY KEY CLUSTERED 
(
	[bill_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bills]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bills](
	[bill_id] [bigint] IDENTITY(1,1) NOT NULL,
	[user_name] [bigint] NULL,
	[order_id] [bigint] NULL,
	[bill_time] [datetime] NULL,
	[total_amount] [bigint] NULL,
	[payment_method] [bigint] NULL,
	[address] [int] NULL,
	[bank_number] [varchar](50) NULL,
 CONSTRAINT [PK_Bills] PRIMARY KEY CLUSTERED 
(
	[bill_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[category_id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[description] [nvarchar](max) NULL,
	[active] [bit] NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[category_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Combo_Details]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Combo_Details](
	[combo_detail_id] [bigint] IDENTITY(1,1) NOT NULL,
	[combo_id] [bigint] NULL,
	[menu_item_id] [bigint] NULL,
	[quantity] [bigint] NULL,
	[combo_type_id] [int] NULL,
 CONSTRAINT [PK_ComboDetails] PRIMARY KEY CLUSTERED 
(
	[combo_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Combos]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Combos](
	[combo_id] [bigint] IDENTITY(1,1) NOT NULL,
	[combo_name] [nvarchar](100) NULL,
	[combo_user] [bigint] NULL,
	[total_amount] [money] NULL,
 CONSTRAINT [PK_Combo] PRIMARY KEY CLUSTERED 
(
	[combo_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Deliveries]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Deliveries](
	[delivery_id] [bigint] IDENTITY(1,1) NOT NULL,
	[inventories_brand_id] [bigint] NULL,
	[date] [datetime] NULL,
	[warehouse_manager_id] [bigint] NULL,
	[user_id] [bigint] NULL,
 CONSTRAINT [PK_Delivery] PRIMARY KEY CLUSTERED 
(
	[delivery_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Delivery_Details]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Delivery_Details](
	[delivery_detail_id] [bigint] IDENTITY(1,1) NOT NULL,
	[delivery_id] [bigint] NULL,
	[ingredient_id] [bigint] NULL,
	[quantity] [int] NULL,
 CONSTRAINT [PK_DeliveryDetails] PRIMARY KEY CLUSTERED 
(
	[delivery_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Delivery_Order_Details]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Delivery_Order_Details](
	[delivery_oder_detail_id] [bigint] IDENTITY(1,1) NOT NULL,
	[deliveryoder_id] [bigint] NULL,
	[menu_item_id] [bigint] NULL,
	[quantity] [int] NULL,
	[order_time] [datetime] NULL,
 CONSTRAINT [PK_DeliveryOrderDetails] PRIMARY KEY CLUSTERED 
(
	[delivery_oder_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Delivery_Orders]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Delivery_Orders](
	[delivery_order_id] [bigint] IDENTITY(1,1) NOT NULL,
	[user_id] [bigint] NULL,
	[order_date] [datetime] NULL,
	[delivery_address] [nvarchar](max) NULL,
	[total_amount] [decimal](10, 2) NULL,
	[order_id] [bigint] NULL,
	[status_id] [bigint] NULL,
 CONSTRAINT [PK__Delivery__4CFAF4106BD8D89E] PRIMARY KEY CLUSTERED 
(
	[delivery_order_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Delivery_Orders_Status]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Delivery_Orders_Status](
	[status_id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Delivery_Orders_Status] PRIMARY KEY CLUSTERED 
(
	[status_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Events]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Events](
	[event_id] [bigint] IDENTITY(1,1) NOT NULL,
	[event_name] [nvarchar](50) NULL,
	[event_date] [datetime] NULL,
	[number_of_guest] [int] NULL,
	[combo_id] [bigint] NULL,
	[order_id] [bigint] NULL,
 CONSTRAINT [PK__Events__7944C870E9B386A0] PRIMARY KEY CLUSTERED 
(
	[event_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Favorites]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Favorites](
	[favorite_id] [bigint] IDENTITY(1,1) NOT NULL,
	[user_name] [bigint] NULL,
	[menu_item_id] [bigint] NULL,
	[favorite_date] [datetime] NULL,
 CONSTRAINT [PK_Favorites] PRIMARY KEY CLUSTERED 
(
	[favorite_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Ingredients]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ingredients](
	[ingredient_id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[description] [nvarchar](255) NULL,
	[order_threshold] [int] NULL,
 CONSTRAINT [PK_Ingredients] PRIMARY KEY CLUSTERED 
(
	[ingredient_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inventories]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inventories](
	[inventory_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ingredient_id] [bigint] NOT NULL,
	[supplier_id] [bigint] NOT NULL,
 CONSTRAINT [PK_Inventories] PRIMARY KEY CLUSTERED 
(
	[inventory_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inventory_Branchs]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inventory_Branchs](
	[inventory_branch_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ingredient_id] [bigint] NULL,
	[supplier_id] [bigint] NULL,
	[restaurant_id] [bigint] NULL,
 CONSTRAINT [PK_Inventory] PRIMARY KEY CLUSTERED 
(
	[inventory_branch_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Majors]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Majors](
	[major_id] [int] IDENTITY(1,1) NOT NULL,
	[major_name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Majors] PRIMARY KEY CLUSTERED 
(
	[major_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Menu_Item_Ingredients]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Menu_Item_Ingredients](
	[menu_item_ingredient_id] [bigint] IDENTITY(1,1) NOT NULL,
	[menu_item_id] [bigint] NULL,
	[ingredient_id] [bigint] NULL,
	[quantity] [decimal](10, 2) NULL,
 CONSTRAINT [PK__MenuItem__4FF85BFC18F0941D] PRIMARY KEY CLUSTERED 
(
	[menu_item_ingredient_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Menu_Items]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Menu_Items](
	[menu_item_id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NULL,
	[description] [nvarchar](max) NULL,
	[price] [decimal](10, 2) NULL,
	[image_url] [nvarchar](255) NULL,
	[category_id] [bigint] NULL,
	[status] [bit] NULL,
 CONSTRAINT [PK__MenuItem__8943F702A2EE1E65] PRIMARY KEY CLUSTERED 
(
	[menu_item_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Merge_Tables]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Merge_Tables](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[table_id] [bigint] NULL,
	[merge_table_id] [varchar](50) NULL,
	[merge_time] [datetime] NULL,
 CONSTRAINT [PK_GopBan] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order_Details]    Script Date: 10/25/2023 6:32:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order_Details](
	[order_detail_id] [bigint] IDENTITY(1,1) NOT NULL,
	[order_id] [bigint] NULL,
	[menu_item_id] [bigint] NULL,
	[quantity] [bigint] NULL,
	[subtotal] [decimal](10, 2) NULL,
 CONSTRAINT [PK__OrderDet__D3B9D30CE3624A00] PRIMARY KEY CLUSTERED 
(
	[order_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order_Thresholds]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order_Thresholds](
	[ingredient_id] [bigint] NULL,
	[reorder_point] [int] NULL,
	[inventory_id] [bigint] NULL,
	[inventory_branch_id] [bigint] NULL,
	[order_threshold_id] [bigint] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Order_Thresholds] PRIMARY KEY CLUSTERED 
(
	[order_threshold_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order_Types]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order_Types](
	[order_type_id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_OrderType_1] PRIMARY KEY CLUSTERED 
(
	[order_type_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[order_id] [bigint] IDENTITY(1,1) NOT NULL,
	[user_name] [bigint] NULL,
	[order_date] [datetime] NULL,
	[total_amount] [decimal](10, 2) NULL,
	[table_id] [bigint] NULL,
	[order_type] [bigint] NULL,
	[combo_id] [bigint] NULL,
 CONSTRAINT [PK__Orders__C3905BAF4C87AD84] PRIMARY KEY CLUSTERED 
(
	[order_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payments]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payments](
	[payment_id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NULL,
 CONSTRAINT [PK__Payments__9B556A58B5F20FA6] PRIMARY KEY CLUSTERED 
(
	[payment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rates]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rates](
	[menu_item_id] [bigint] NULL,
	[user_id] [bigint] NULL,
	[rating] [int] NULL,
	[rating_id] [bigint] NOT NULL,
 CONSTRAINT [PK_Rates] PRIMARY KEY CLUSTERED 
(
	[rating_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Receipt]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Receipt](
	[receipt_id] [bigint] IDENTITY(1,1) NOT NULL,
	[user_id] [nvarchar](50) NULL,
	[supplier_id] [bigint] NULL,
	[date] [datetime] NULL,
	[total_amount] [money] NULL,
	[inventory_id] [bigint] NULL,
 CONSTRAINT [PK_Receipt] PRIMARY KEY CLUSTERED 
(
	[receipt_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Receipt_Details]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Receipt_Details](
	[receipt_detail_id] [bigint] IDENTITY(1,1) NOT NULL,
	[ingredient_id] [bigint] NULL,
	[quantity] [int] NULL,
	[unit_price] [money] NULL,
	[receipt_id] [bigint] NULL,
 CONSTRAINT [PK_ReceiptDetails] PRIMARY KEY CLUSTERED 
(
	[receipt_detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reservations]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reservations](
	[reservation_id] [bigint] IDENTITY(1,1) NOT NULL,
	[user_name] [bigint] NULL,
	[reservation_date] [datetime] NULL,
	[number_of_guest] [bigint] NULL,
	[table_id] [bigint] NULL,
	[order_id] [bigint] NULL,
 CONSTRAINT [PK__Reservat__B7EE5F045A25368D] PRIMARY KEY CLUSTERED 
(
	[reservation_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Restaurant_Tables]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Restaurant_Tables](
	[table_id] [bigint] IDENTITY(1,1) NOT NULL,
	[table_name] [nvarchar](50) NULL,
	[table_type_id] [int] NULL,
	[table_status_id] [int] NULL,
	[restaurant_id] [bigint] NULL,
 CONSTRAINT [PK__Tables__7D5F018EC11D63DC] PRIMARY KEY CLUSTERED 
(
	[table_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Restaurants]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Restaurants](
	[restaurant_id] [bigint] IDENTITY(1,1) NOT NULL,
	[restaurant_name] [nvarchar](50) NULL,
	[address] [int] NULL,
	[phone] [nvarchar](11) NULL,
	[email] [varchar](50) NULL,
 CONSTRAINT [PK_Restaurants] PRIMARY KEY CLUSTERED 
(
	[restaurant_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role_Functions]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role_Functions](
	[role_function_id] [int] IDENTITY(1,1) NOT NULL,
	[role_id] [int] NULL,
	[major_id] [int] NULL,
 CONSTRAINT [PK_Role_Functions] PRIMARY KEY CLUSTERED 
(
	[role_function_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[role_id] [int] IDENTITY(1,1) NOT NULL,
	[role_sa] [nvarchar](50) NULL,
	[role_name] [nvarchar](50) NULL,
	[role_detail] [nvarchar](255) NULL,
	[description] [nvarchar](255) NULL,
 CONSTRAINT [PK__Roles__8AFACE3A16BAF6A3] PRIMARY KEY CLUSTERED 
(
	[role_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Suppliers]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Suppliers](
	[supplier_id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[address] [nvarchar](100) NULL,
	[phone] [varchar](11) NULL,
	[email] [varchar](100) NULL,
 CONSTRAINT [PK_Supplier] PRIMARY KEY CLUSTERED 
(
	[supplier_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Table_Status]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Table_Status](
	[table_status_id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
 CONSTRAINT [PK_TableStatus] PRIMARY KEY CLUSTERED 
(
	[table_status_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Table_Types]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Table_Types](
	[table_type_id] [int] NOT NULL,
	[type_name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Table_Types] PRIMARY KEY CLUSTERED 
(
	[table_type_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Token]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Token](
	[token_id] [int] IDENTITY(1,1) NOT NULL,
	[token] [nvarchar](255) NULL,
	[revoked] [bit] NULL,
	[expired] [bit] NULL,
	[user_id] [bigint] NULL,
	[token_type] [nvarchar](50) NULL,
 CONSTRAINT [PK_Token] PRIMARY KEY CLUSTERED 
(
	[token_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 10/25/2023 6:32:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[user_id] [bigint] IDENTITY(1,1) NOT NULL,
	[full_name] [nvarchar](50) NULL,
	[username] [varchar](50) NULL,
	[password] [varchar](max) NULL,
	[phone] [nvarchar](15) NULL,
	[email] [nvarchar](100) NULL,
	[address] [int] NULL,
	[image] [nvarchar](100) NULL,
	[manager_id] [bigint] NULL,
	[restaurant_brach_id] [bigint] NULL,
	[role_id] [int] NULL,
 CONSTRAINT [PK__Users__1788CCACB2017D19] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([category_id], [name], [description], [active]) VALUES (1, N'Salad', N'Món khai vị', 1)
INSERT [dbo].[Categories] ([category_id], [name], [description], [active]) VALUES (2, N'Soup', N'Món khai vị ', 1)
INSERT [dbo].[Categories] ([category_id], [name], [description], [active]) VALUES (3, N'Sandwich', N'Món ăn nhanh', 1)
INSERT [dbo].[Categories] ([category_id], [name], [description], [active]) VALUES (4, N'Beef', N'Món chính', 1)
INSERT [dbo].[Categories] ([category_id], [name], [description], [active]) VALUES (5, N'Chicken', N'Món chính', 1)
INSERT [dbo].[Categories] ([category_id], [name], [description], [active]) VALUES (6, N'Seafood', N'Món chính', 1)
INSERT [dbo].[Categories] ([category_id], [name], [description], [active]) VALUES (7, N'Juice', N'Nước trái cây', 1)
INSERT [dbo].[Categories] ([category_id], [name], [description], [active]) VALUES (8, N'Mocktail', N'Nước có cồn', 1)
INSERT [dbo].[Categories] ([category_id], [name], [description], [active]) VALUES (9, N'Ice Cream', N'Món tráng miệng', 1)
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[Combos] ON 

INSERT [dbo].[Combos] ([combo_id], [combo_name], [combo_user], [total_amount]) VALUES (1, N'Combo bữa trưa vui vẻ', NULL, 325000.0000)
INSERT [dbo].[Combos] ([combo_id], [combo_name], [combo_user], [total_amount]) VALUES (2, N'Combo Family Deal', NULL, 575000.0000)
INSERT [dbo].[Combos] ([combo_id], [combo_name], [combo_user], [total_amount]) VALUES (3, N'Combo gia đình sum vầy', NULL, 759000.0000)
INSERT [dbo].[Combos] ([combo_id], [combo_name], [combo_user], [total_amount]) VALUES (4, N'Combo món ngon món xịn', NULL, 465000.0000)
INSERT [dbo].[Combos] ([combo_id], [combo_name], [combo_user], [total_amount]) VALUES (5, N'Combo yêu nồng nàng', NULL, 495000.0000)
SET IDENTITY_INSERT [dbo].[Combos] OFF
GO
SET IDENTITY_INSERT [dbo].[Events] ON 

INSERT [dbo].[Events] ([event_id], [event_name], [event_date], [number_of_guest], [combo_id], [order_id]) VALUES (1, N'Tiệc sinh nhật', NULL, NULL, NULL, NULL)
INSERT [dbo].[Events] ([event_id], [event_name], [event_date], [number_of_guest], [combo_id], [order_id]) VALUES (2, N'Tiệc liên hoan', NULL, NULL, NULL, NULL)
INSERT [dbo].[Events] ([event_id], [event_name], [event_date], [number_of_guest], [combo_id], [order_id]) VALUES (3, N'Tiệc kỷ niệm', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Events] OFF
GO
SET IDENTITY_INSERT [dbo].[Ingredients] ON 

INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (1, N'Cà chua', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (2, N'Dưa chuột', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (3, N'Hành tây', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (4, N'Hành lá', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (5, N'Rau xà lách', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (6, N'Rau bina', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (7, N'Cải bó xôi', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (8, N'Ớt', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (9, N'Hương thảo', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (10, N'Húng quế', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (11, N'Rau mùi', N'Rau củ', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (12, N'Thịt gà', N'Thực phẩm động vật', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (13, N'Thịt bò', N'Thực phẩm động vật', 10)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (14, N'Thịt lợn', N'Thực phẩm động vật', 20)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (15, N'Thịt cừu', N'Thực phẩm động vật', 30)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (16, N'Mực', N'Hải sản', 30)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (17, N'Tôm', N'Hải sản', 30)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (18, N'Sò điệp', N'Hải sản', 40)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (19, N'Cá hồi', N'Hải sản', 50)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (20, N'Cá ngừ', N'Hải sản', 30)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (21, N'Gelato', N'Kem', 100)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (22, N'Zabaione', N'Kem', 100)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (23, N'Mascarpone', N'Kem', 50)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (24, N'Panna Cotta', N'Kem', 100)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (25, N'Kem sô cô la', N'Kem', 50)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (26, N'Spaghetti', N'Mỳ', 300)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (27, N'Fettuccine', N'Mỳ', 300)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (28, N'Bột mỳ', N'Bột', 500)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (29, N'Bột bánh ngọt ', N'Bột', 400)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (30, N'Bột gạo', N'Bột', 300)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (31, N'Bột mỳ trắng trứng ', N'Bột', 300)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (32, N'Muối', N'Gia vị', 100)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (33, N'Đường', N'Gia vị', 300)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (34, N'Bột ngọt', N'Gia vị', 50)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (35, N'Nước mắm', N'Gia vị', 100)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (36, N'Nước tương', N'Gia vị', 200)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (37, N'Dầu hào', N'Gia vị', 100)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (38, N'Dầu ô liu', N'Gia vị', 300)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (39, N'Húng tây', N'Gia vị', 300)
INSERT [dbo].[Ingredients] ([ingredient_id], [name], [description], [order_threshold]) VALUES (40, N'Ngủ vị hương', N'Gia vị', 300)
SET IDENTITY_INSERT [dbo].[Ingredients] OFF
GO
SET IDENTITY_INSERT [dbo].[Inventories] ON 

INSERT [dbo].[Inventories] ([inventory_id], [ingredient_id], [supplier_id]) VALUES (10, 2, 8)
INSERT [dbo].[Inventories] ([inventory_id], [ingredient_id], [supplier_id]) VALUES (11, 1, 2)
INSERT [dbo].[Inventories] ([inventory_id], [ingredient_id], [supplier_id]) VALUES (12, 2, 1)
INSERT [dbo].[Inventories] ([inventory_id], [ingredient_id], [supplier_id]) VALUES (13, 2, 5)
INSERT [dbo].[Inventories] ([inventory_id], [ingredient_id], [supplier_id]) VALUES (14, 5, 2)
INSERT [dbo].[Inventories] ([inventory_id], [ingredient_id], [supplier_id]) VALUES (15, 6, 7)
INSERT [dbo].[Inventories] ([inventory_id], [ingredient_id], [supplier_id]) VALUES (16, 4, 3)
INSERT [dbo].[Inventories] ([inventory_id], [ingredient_id], [supplier_id]) VALUES (17, 14, 8)
INSERT [dbo].[Inventories] ([inventory_id], [ingredient_id], [supplier_id]) VALUES (18, 10, 1)
SET IDENTITY_INSERT [dbo].[Inventories] OFF
GO
SET IDENTITY_INSERT [dbo].[Inventory_Branchs] ON 

INSERT [dbo].[Inventory_Branchs] ([inventory_branch_id], [ingredient_id], [supplier_id], [restaurant_id]) VALUES (1, 1, 1, 1)
INSERT [dbo].[Inventory_Branchs] ([inventory_branch_id], [ingredient_id], [supplier_id], [restaurant_id]) VALUES (2, 2, 2, 2)
SET IDENTITY_INSERT [dbo].[Inventory_Branchs] OFF
GO
SET IDENTITY_INSERT [dbo].[Majors] ON 

INSERT [dbo].[Majors] ([major_id], [major_name]) VALUES (1, N'ADMIN_READ')
INSERT [dbo].[Majors] ([major_id], [major_name]) VALUES (2, N'ADMIN_UPDATE')
INSERT [dbo].[Majors] ([major_id], [major_name]) VALUES (3, N'ADMIN_DELETE')
INSERT [dbo].[Majors] ([major_id], [major_name]) VALUES (4, N'ADMIN_CREATE')
INSERT [dbo].[Majors] ([major_id], [major_name]) VALUES (5, N'MANAGER_READ')
INSERT [dbo].[Majors] ([major_id], [major_name]) VALUES (6, N'MANAGER_UPDATE')
INSERT [dbo].[Majors] ([major_id], [major_name]) VALUES (7, N'MANAGER_DELETE')
INSERT [dbo].[Majors] ([major_id], [major_name]) VALUES (8, N'MANAGER_CREATE')
INSERT [dbo].[Majors] ([major_id], [major_name]) VALUES (9, N'USER')
SET IDENTITY_INSERT [dbo].[Majors] OFF
GO
SET IDENTITY_INSERT [dbo].[Menu_Item_Ingredients] ON 

INSERT [dbo].[Menu_Item_Ingredients] ([menu_item_ingredient_id], [menu_item_id], [ingredient_id], [quantity]) VALUES (1, 1, 2, CAST(15.00 AS Decimal(10, 2)))
INSERT [dbo].[Menu_Item_Ingredients] ([menu_item_ingredient_id], [menu_item_id], [ingredient_id], [quantity]) VALUES (2, 2, 3, CAST(15.00 AS Decimal(10, 2)))
INSERT [dbo].[Menu_Item_Ingredients] ([menu_item_ingredient_id], [menu_item_id], [ingredient_id], [quantity]) VALUES (3, 3, 3, CAST(17.00 AS Decimal(10, 2)))
INSERT [dbo].[Menu_Item_Ingredients] ([menu_item_ingredient_id], [menu_item_id], [ingredient_id], [quantity]) VALUES (4, 4, 5, CAST(11.00 AS Decimal(10, 2)))
INSERT [dbo].[Menu_Item_Ingredients] ([menu_item_ingredient_id], [menu_item_id], [ingredient_id], [quantity]) VALUES (5, 5, 5, CAST(12.00 AS Decimal(10, 2)))
SET IDENTITY_INSERT [dbo].[Menu_Item_Ingredients] OFF
GO
SET IDENTITY_INSERT [dbo].[Menu_Items] ON 

INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (1, N'Banana Pancake - Bánh Chuối', N'Thành Phần: Bánh Trứng, Chuối, Sốt Cam hoặc Sốt Chocolcate./ Orange sauce or chocolate sauce', CAST(56000.00 AS Decimal(10, 2)), NULL, 1, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (2, N'Braised fish in clay pot w/onion red chili + rice - Cá Kho Tộ + Cơm', N'Thành phần: Cá Kho Tộ + Cơm/ Braised fish in clay pot with onion, red chilli + rice ', CAST(149000.00 AS Decimal(10, 2)), NULL, 2, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (3, N'Braised pork in clay pot w\onion, red chilli + rice - Thịt Heo Kho Tộ + Cơm', N'Thành phần: Thịt Heo Kho Tộ + Cơm/Braised pork in clay pot w\onion, red chilli +rice', CAST(159000.00 AS Decimal(10, 2)), NULL, 3, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (4, N'Bruschetta', N'Thành phần: Bánh mì, tỏi, dầu oliu, cà chua tươi(Garlic bread with Cheese Olive oil, fresh tomato).', CAST(65000.00 AS Decimal(10, 2)), NULL, 4, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (5, N'Burger with Meat ball (beef) + Cheese - Burger Bò', N'Thành phần: Bánh mỳ tròn, bò, sốt BBQ, jam-bông, phomai/Burger with Meat- ball + Cheese', CAST(117000.00 AS Decimal(10, 2)), NULL, 5, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (6, N'Calamari alla Romana - Mực Lăn Bột Chiên Giòn + Rau Đậu Luộc', N'Thành Phần: Mực Lăn Bột Chiên Giòn+ Rau Đậu Luộc/ Deep- fried squids+ tartare sauce', CAST(177000.00 AS Decimal(10, 2)), NULL, 6, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (7, N'Cantonese Rice - Cơm Cantonese', N'Thành Phần: Com chiên với jam-bông, tôm, trứng, xúc xích, cà rốt./ Fried rice w/ Ham, shrimp, egg, Chinese Sausage, Carrot', CAST(95000.00 AS Decimal(10, 2)), NULL, 7, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (8, N'Chicken Fingers & chip - Gà Rán + Khoai Tây Chiên', N'Thành phần: Gà Rán + Khoai Tây Chiên/Chicken Fingers & chip in a basket', CAST(117000.00 AS Decimal(10, 2)), NULL, 8, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (9, N'Chocolate Mousse', N'Thành phần: Chocolate Mousse', CAST(65000.00 AS Decimal(10, 2)), NULL, 9, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (10, N'Crema di funghi - Súp Kem Nấm Kiểu Ý', N'Thành phần: Súp Kem Nấm Kiểu Ý/ Cream of fresh Mushroom .', CAST(63000.00 AS Decimal(10, 2)), NULL, 1, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (11, N'Crema di pomodoro - Súp Kem Cà Chua Kiểu Ý', N'Thành phần: Súp Kem Cà Chua Kiểu Ý./Cream of fresh tomato with crouton', CAST(51000.00 AS Decimal(10, 2)), NULL, 2, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (12, N'Crema di zucca - Súp Bí Đỏ', N'Thành phần: Kem sữa, bí đỏ, hành, cà rốt, khoai tây/ Cream of fresh tomato with crouton.', CAST(63000.00 AS Decimal(10, 2)), NULL, 3, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (13, N'Crepe W/ Vanilla Ice Cream', N'Thành Phần: Bánh kép với kem/ Crepe with vanilla ice cream ', CAST(35000.00 AS Decimal(10, 2)), NULL, 4, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (14, N'Croque Funghi - Bánh Mì Tỏi Sốt Nấm', N'Thành phần: bánh mì, tỏi, sốt nấm, phomai bột (Garlic Toast with mushroom sauce, Pamersan cheese).', CAST(63000.00 AS Decimal(10, 2)), NULL, 5, 1)
INSERT [dbo].[Menu_Items] ([menu_item_id], [name], [description], [price], [image_url], [category_id], [status]) VALUES (15, N'Fried chicken w/sauteed vegetables& casshew nuts + rice - Gà xào Rau Củ Quả + Cơm', N'Thành phần: Rau xào rau củ quả với hạt điều + Cơm/Fried chicken w/sauteed vegetables& casshew nuts + rice', CAST(129000.00 AS Decimal(10, 2)), NULL, 6, 1)
SET IDENTITY_INSERT [dbo].[Menu_Items] OFF
GO
SET IDENTITY_INSERT [dbo].[Payments] ON 

INSERT [dbo].[Payments] ([payment_id], [name]) VALUES (1, N'vnpay')
INSERT [dbo].[Payments] ([payment_id], [name]) VALUES (2, N'momo')
INSERT [dbo].[Payments] ([payment_id], [name]) VALUES (3, N'zalopay')
SET IDENTITY_INSERT [dbo].[Payments] OFF
GO
SET IDENTITY_INSERT [dbo].[Restaurant_Tables] ON 

INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (11, N'Bàn 1', 1, 1, 1)
INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (12, N'Bàn 2', 1, 2, 1)
INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (13, N'Bàn 3', 1, 3, 1)
INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (14, N'Bàn 4', 1, 1, 1)
INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (15, N'Bàn 5', 2, 2, 1)
INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (16, N'Bàn 6', 2, 3, 2)
INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (17, N'Bàn 7', 2, 1, 2)
INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (18, N'Bàn 8', 3, 2, 2)
INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (19, N'Bàn 9', 3, 3, 2)
INSERT [dbo].[Restaurant_Tables] ([table_id], [table_name], [table_type_id], [table_status_id], [restaurant_id]) VALUES (20, N'Bàn 10', 3, 1, 2)
SET IDENTITY_INSERT [dbo].[Restaurant_Tables] OFF
GO
SET IDENTITY_INSERT [dbo].[Restaurants] ON 

INSERT [dbo].[Restaurants] ([restaurant_id], [restaurant_name], [address], [phone], [email]) VALUES (1, N'Nhà hàng Ý chi nhánh Cần Thơ', NULL, N'02923839532', N'cantho.restaurant@gamil.com')
INSERT [dbo].[Restaurants] ([restaurant_id], [restaurant_name], [address], [phone], [email]) VALUES (2, N'Nhà hàng Ý chi nhánh Vĩnh Long', NULL, N'02924222444', N'vinhlong.restaurant@gmail.com')
SET IDENTITY_INSERT [dbo].[Restaurants] OFF
GO
SET IDENTITY_INSERT [dbo].[Role_Functions] ON 

INSERT [dbo].[Role_Functions] ([role_function_id], [role_id], [major_id]) VALUES (1, 1, 1)
INSERT [dbo].[Role_Functions] ([role_function_id], [role_id], [major_id]) VALUES (2, 1, 2)
INSERT [dbo].[Role_Functions] ([role_function_id], [role_id], [major_id]) VALUES (3, 1, 3)
INSERT [dbo].[Role_Functions] ([role_function_id], [role_id], [major_id]) VALUES (4, 1, 4)
INSERT [dbo].[Role_Functions] ([role_function_id], [role_id], [major_id]) VALUES (5, 1, 5)
INSERT [dbo].[Role_Functions] ([role_function_id], [role_id], [major_id]) VALUES (6, 1, 6)
INSERT [dbo].[Role_Functions] ([role_function_id], [role_id], [major_id]) VALUES (7, 1, 7)
INSERT [dbo].[Role_Functions] ([role_function_id], [role_id], [major_id]) VALUES (8, 1, 8)
SET IDENTITY_INSERT [dbo].[Role_Functions] OFF
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (1, N'ADMIN', N'ADMIN', N'abc', N'abc')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (2, N'DBC', N'Đầu bếp chính', N'Quản lý bếp và chuẩn bị các món ăn', N'Tạo và chỉnh sửa thực đơn, quản lý đội ngũ đầu bếp, và kiểm soát chất lượng thực phẩm')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (3, N'NVBAR', N'Nhân viên Bar', N'Pha chế đồ uống và quản lý quầy bar', N'Lập thực đơn đồ uống, pha chế và phục vụ đồ uống, và quản lý kho hàng bar')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (4, N'NVBEP', N'Nhân viên bếp', N'Chuẩn bị thực phẩm và hỗ trợ đầu bếp chính', N'Chuẩn bị nguyên liệu, thực hiện công việc cắt, xắt, rửa chén và đảm bảo vệ sinh trong bếp')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (5, N'NVLT', N'Nhân viên lễ tân', N'Đón tiếp và hướng dẫn khách đến bàn', N'Quản lý đặt bàn, xếp chỗ cho khách, và đảm bảo khách được đón tiếp một cách chuyên nghiệp')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (6, N'NVPC', N'Nhân viên pha chế', N'Làm đồ uống cà phê và đồ uống liên quan', N'Làm đẹp và pha chế đồ uống theo yêu cầu của khách hàng')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (7, N'NVQLDB', N'Nhân viên quản lý đặt bàn', N'Quản lý các đặt bàn và thời gian đến', N'Xác nhận, điều chỉnh hoặc hủy đặt bàn và quản lý lịch đặt bàn')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (8, N'NVQLTC', N'Nhân viên quản lý tài chính', N'Quản lý tài chính và kế toán của nhà hàng', N'Quản lý ngân sách, thống kê tài chính, và thực hiện việc thanh toán cho nhà cung cấp')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (9, N'NVVS', N'Nhân viên vệ sinh', N'Dọn dẹp và giữ vệ sinh nhà hàng', N'Rửa bát đĩa, lau dọn bàn, sàn và vệ sinh các khu vực chung')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (10, N'PV', N'Phục vụ', N'Phục vụ thực khách trong nhà hàng', N'Ghi đơn, phục vụ món ăn, và tương tác với khách hàng')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (11, N'QLNH', N'Quản lý Nhà hàng', N'Quản lý tổng quan hoạt động của nhà hàng', N'Quản lý nhân viên, kiểm soát lịch làm việc, quản lý hàng tồn kho, và quản lý tài chính của nhà hàng')
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (12, N'STAFF', N'STAFF', NULL, NULL)
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (13, N'CUSTOMER', N'CUSTOMER', NULL, NULL)
INSERT [dbo].[Roles] ([role_id], [role_sa], [role_name], [role_detail], [description]) VALUES (14, N'MANAGER', N'MANAGER', NULL, NULL)
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
SET IDENTITY_INSERT [dbo].[Suppliers] ON 

INSERT [dbo].[Suppliers] ([supplier_id], [name], [address], [phone], [email]) VALUES (1, N'Công ty Thực Phẩm Thành Nam Food', N'168/42 DX006 , KP 8, P. Phú Mỹ, Thủ Dầu Một, Bình Dương', N'0985331366', N'Thanhnamfood010203@gmail.com')
INSERT [dbo].[Suppliers] ([supplier_id], [name], [address], [phone], [email]) VALUES (2, N'Công ty Cổ phần Chăn nuôi C.P. Việt Nam (CPV)', N'Số 2 đường 2A, KCN Biên Hoà II, Long Bình Tân, Biên Hòa, Đồng Nai', N'02866808989', N'sale.cpfoods.vn@gmail.com')
INSERT [dbo].[Suppliers] ([supplier_id], [name], [address], [phone], [email]) VALUES (3, N'Công ty Cổ phần Thực phẩm Thiên Vương (ACE FOODS)', N'30 Nguyễn Khang, Yên Hòa, Cầu Giấy, Hà Nội', N'02437832562', N'info@acefoods.vn')
INSERT [dbo].[Suppliers] ([supplier_id], [name], [address], [phone], [email]) VALUES (4, N'Công ty TNHH Thực phẩm Hữu Nghị', N'40/2/5 Trần Thị Do, Phường Hiệp Thành, Quận 12, TP. HCM', N'0901890990', N'huunghiceo@gmail.com')
INSERT [dbo].[Suppliers] ([supplier_id], [name], [address], [phone], [email]) VALUES (5, N'Công ty TNHH Thực phẩm Nguyên Hà (Nguyên Hà Food)', N'14/7 Bis Kỳ Đồng, Phường 9, Quận 3, TP. HCM', N'0902819653', N'info@nguyenhafood.vn')
INSERT [dbo].[Suppliers] ([supplier_id], [name], [address], [phone], [email]) VALUES (6, N'Công ty Thực phẩm Lộc Vạn Xuân', N'51 đường Thạnh Lộc 41, Phường Thạnh Lộc, Quận 12, TP. HCM', N'0906784655', N'locvanxuan7979@gmail.com')
INSERT [dbo].[Suppliers] ([supplier_id], [name], [address], [phone], [email]) VALUES (7, N'Công ty cổ phần Miền Thực Phẩm - Foodland', N'E3 - 930 đường Bạch Đằng, Thanh Lương, Hai Bà Trưng, Hà Nội', N'02439328189', N'admin@foodland.com.vn')
INSERT [dbo].[Suppliers] ([supplier_id], [name], [address], [phone], [email]) VALUES (8, N'Công ty Cổ phần Zin Food Việt Nam', N'Bình Lợi, Phường 13, Quận Bình Thạnh, TP. HCM', N'0822003003', N'zinfoodcom@gmail.com')
INSERT [dbo].[Suppliers] ([supplier_id], [name], [address], [phone], [email]) VALUES (9, N'Công ty TNHH thực phẩm Hoàng Đông', N'Phòng 201, nhà C6 Mai Động, Hoàng Mai, Hà Nội', N'02422182181', N'https://hoangdongfood.com/')
SET IDENTITY_INSERT [dbo].[Suppliers] OFF
GO
SET IDENTITY_INSERT [dbo].[Table_Status] ON 

INSERT [dbo].[Table_Status] ([table_status_id], [name]) VALUES (1, N'Đang sử dụng')
INSERT [dbo].[Table_Status] ([table_status_id], [name]) VALUES (2, N'Đang chờ')
INSERT [dbo].[Table_Status] ([table_status_id], [name]) VALUES (3, N'Trống')
SET IDENTITY_INSERT [dbo].[Table_Status] OFF
GO
INSERT [dbo].[Table_Types] ([table_type_id], [type_name]) VALUES (1, N'Bàn thường')
INSERT [dbo].[Table_Types] ([table_type_id], [type_name]) VALUES (2, N'Bàn lớn')
INSERT [dbo].[Table_Types] ([table_type_id], [type_name]) VALUES (3, N'Bàn tiệc')
GO
SET IDENTITY_INSERT [dbo].[Token] ON 

INSERT [dbo].[Token] ([token_id], [token], [revoked], [expired], [user_id], [token_type]) VALUES (238, N'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaWV1ODA4IiwiaWF0IjoxNjk4MTg4NDIwLCJleHAiOjE2OTgxODg0ODB9.nd7z-_wnAGTL9oog3AN5U7FYh_WmKPCQp2-B8zcv9Rw', 0, 0, 8, N'BEARER')
INSERT [dbo].[Token] ([token_id], [token], [revoked], [expired], [user_id], [token_type]) VALUES (239, N'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjMiLCJpYXQiOjE2OTgxODk0MDIsImV4cCI6MTY5ODI3NTgwMn0.n2CIxlO5-TvK8KltoDjVCbzO8n_c-BVRrQl_SHt4sZk', 1, 1, 7, N'BEARER')
INSERT [dbo].[Token] ([token_id], [token], [revoked], [expired], [user_id], [token_type]) VALUES (240, N'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjMiLCJpYXQiOjE2OTgxODk4NjYsImV4cCI6MTY5ODI3NjI2Nn0.yXC966ObFQs0GWumpxjVF3I4DXaaXAm3aM8mufql1Ys', 1, 1, 7, N'BEARER')
INSERT [dbo].[Token] ([token_id], [token], [revoked], [expired], [user_id], [token_type]) VALUES (241, N'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjMiLCJpYXQiOjE2OTgxODk4OTYsImV4cCI6MTY5ODI3NjI5Nn0.cVUtLdmaSYAQpazrn6jV_jjT6uEKDEjuiK_6rFUxij0', 0, 0, 7, N'BEARER')
SET IDENTITY_INSERT [dbo].[Token] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([user_id], [full_name], [username], [password], [phone], [email], [address], [image], [manager_id], [restaurant_brach_id], [role_id]) VALUES (4, N'Lê', N'letrunghieu', N'$2a$10$fBaXWL0ecgjRsgJnpFNszempb/5U0BeL9ONyA3isZU5O2yghVIZ5G', N'0769966673', N'hieult808@gmail.com', 125, N'a.jpg', 1, 1, 1)
INSERT [dbo].[Users] ([user_id], [full_name], [username], [password], [phone], [email], [address], [image], [manager_id], [restaurant_brach_id], [role_id]) VALUES (5, NULL, NULL, N'$2a$10$fBaXWL0ecgjRsgJnpFNszempb/5U0BeL9ONyA3isZU5O2yghVIZ5G', NULL, NULL, NULL, NULL, NULL, NULL, 1)
INSERT [dbo].[Users] ([user_id], [full_name], [username], [password], [phone], [email], [address], [image], [manager_id], [restaurant_brach_id], [role_id]) VALUES (6, NULL, NULL, N'$2a$10$lLFqLqCQLAsCJtAxZJxJYuSDsvVv.a2Dc9IOEdSiKbROZjrs9t8kW', NULL, NULL, NULL, NULL, NULL, NULL, 1)
INSERT [dbo].[Users] ([user_id], [full_name], [username], [password], [phone], [email], [address], [image], [manager_id], [restaurant_brach_id], [role_id]) VALUES (7, N'Lê Trung Hiếu', N'admin3', N'$2a$10$SjwINgkEv.FA7aU9QEvc3O6dbFRRdP8dN4SZdtRejPk0eKjKQ1a/6', N'0769966673', N'hieult808@gmail.com', 125, NULL, NULL, NULL, 1)
INSERT [dbo].[Users] ([user_id], [full_name], [username], [password], [phone], [email], [address], [image], [manager_id], [restaurant_brach_id], [role_id]) VALUES (8, NULL, N'hieu808', N'$2a$10$bRmEk//C.De1LG5Z1uHvxeEqctqXTt95FxJ2.nKpsimonVZpMOXm6', NULL, NULL, NULL, NULL, NULL, NULL, 1)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Bill_Details]  WITH CHECK ADD  CONSTRAINT [FK_Bill_Details_Menu_Items] FOREIGN KEY([menu_item_id])
REFERENCES [dbo].[Menu_Items] ([menu_item_id])
GO
ALTER TABLE [dbo].[Bill_Details] CHECK CONSTRAINT [FK_Bill_Details_Menu_Items]
GO
ALTER TABLE [dbo].[Bill_Details]  WITH CHECK ADD  CONSTRAINT [FK_BillDetails_Bills] FOREIGN KEY([bill_id])
REFERENCES [dbo].[Bills] ([bill_id])
GO
ALTER TABLE [dbo].[Bill_Details] CHECK CONSTRAINT [FK_BillDetails_Bills]
GO
ALTER TABLE [dbo].[Bills]  WITH CHECK ADD  CONSTRAINT [FK_Bills_Orders] FOREIGN KEY([order_id])
REFERENCES [dbo].[Orders] ([order_id])
GO
ALTER TABLE [dbo].[Bills] CHECK CONSTRAINT [FK_Bills_Orders]
GO
ALTER TABLE [dbo].[Bills]  WITH CHECK ADD  CONSTRAINT [FK_Bills_Payments] FOREIGN KEY([payment_method])
REFERENCES [dbo].[Payments] ([payment_id])
GO
ALTER TABLE [dbo].[Bills] CHECK CONSTRAINT [FK_Bills_Payments]
GO
ALTER TABLE [dbo].[Bills]  WITH CHECK ADD  CONSTRAINT [FK_Bills_Users] FOREIGN KEY([user_name])
REFERENCES [dbo].[Users] ([user_id])
GO
ALTER TABLE [dbo].[Bills] CHECK CONSTRAINT [FK_Bills_Users]
GO
ALTER TABLE [dbo].[Combo_Details]  WITH CHECK ADD  CONSTRAINT [FK_ComboDetails_Combo] FOREIGN KEY([combo_id])
REFERENCES [dbo].[Combos] ([combo_id])
GO
ALTER TABLE [dbo].[Combo_Details] CHECK CONSTRAINT [FK_ComboDetails_Combo]
GO
ALTER TABLE [dbo].[Combo_Details]  WITH CHECK ADD  CONSTRAINT [FK_ComboDetails_MenuItems] FOREIGN KEY([menu_item_id])
REFERENCES [dbo].[Menu_Items] ([menu_item_id])
GO
ALTER TABLE [dbo].[Combo_Details] CHECK CONSTRAINT [FK_ComboDetails_MenuItems]
GO
ALTER TABLE [dbo].[Deliveries]  WITH CHECK ADD  CONSTRAINT [FK_Delivery_InventorieBrands] FOREIGN KEY([inventories_brand_id])
REFERENCES [dbo].[Inventory_Branchs] ([inventory_branch_id])
GO
ALTER TABLE [dbo].[Deliveries] CHECK CONSTRAINT [FK_Delivery_InventorieBrands]
GO
ALTER TABLE [dbo].[Deliveries]  WITH CHECK ADD  CONSTRAINT [FK_Delivery_Users] FOREIGN KEY([warehouse_manager_id])
REFERENCES [dbo].[Users] ([user_id])
GO
ALTER TABLE [dbo].[Deliveries] CHECK CONSTRAINT [FK_Delivery_Users]
GO
ALTER TABLE [dbo].[Deliveries]  WITH CHECK ADD  CONSTRAINT [FK_Delivery_Users1] FOREIGN KEY([user_id])
REFERENCES [dbo].[Users] ([user_id])
GO
ALTER TABLE [dbo].[Deliveries] CHECK CONSTRAINT [FK_Delivery_Users1]
GO
ALTER TABLE [dbo].[Delivery_Details]  WITH CHECK ADD  CONSTRAINT [FK_Delivery_Details_Ingredients] FOREIGN KEY([ingredient_id])
REFERENCES [dbo].[Ingredients] ([ingredient_id])
GO
ALTER TABLE [dbo].[Delivery_Details] CHECK CONSTRAINT [FK_Delivery_Details_Ingredients]
GO
ALTER TABLE [dbo].[Delivery_Details]  WITH CHECK ADD  CONSTRAINT [FK_DeliveryDetails_Delivery] FOREIGN KEY([delivery_id])
REFERENCES [dbo].[Deliveries] ([delivery_id])
GO
ALTER TABLE [dbo].[Delivery_Details] CHECK CONSTRAINT [FK_DeliveryDetails_Delivery]
GO
ALTER TABLE [dbo].[Delivery_Order_Details]  WITH CHECK ADD  CONSTRAINT [FK_DeliveryOrderDetails_DeliveryOrders] FOREIGN KEY([deliveryoder_id])
REFERENCES [dbo].[Delivery_Orders] ([delivery_order_id])
GO
ALTER TABLE [dbo].[Delivery_Order_Details] CHECK CONSTRAINT [FK_DeliveryOrderDetails_DeliveryOrders]
GO
ALTER TABLE [dbo].[Delivery_Order_Details]  WITH CHECK ADD  CONSTRAINT [FK_DeliveryOrderDetails_MenuItems] FOREIGN KEY([menu_item_id])
REFERENCES [dbo].[Menu_Items] ([menu_item_id])
GO
ALTER TABLE [dbo].[Delivery_Order_Details] CHECK CONSTRAINT [FK_DeliveryOrderDetails_MenuItems]
GO
ALTER TABLE [dbo].[Delivery_Orders]  WITH CHECK ADD  CONSTRAINT [FK_Delivery_Orders_Delivery_Orders_Status] FOREIGN KEY([status_id])
REFERENCES [dbo].[Delivery_Orders_Status] ([status_id])
GO
ALTER TABLE [dbo].[Delivery_Orders] CHECK CONSTRAINT [FK_Delivery_Orders_Delivery_Orders_Status]
GO
ALTER TABLE [dbo].[Delivery_Orders]  WITH CHECK ADD  CONSTRAINT [FK_Delivery_Orders_Users] FOREIGN KEY([user_id])
REFERENCES [dbo].[Users] ([user_id])
GO
ALTER TABLE [dbo].[Delivery_Orders] CHECK CONSTRAINT [FK_Delivery_Orders_Users]
GO
ALTER TABLE [dbo].[Delivery_Orders]  WITH CHECK ADD  CONSTRAINT [FK_DeliveryOrders_Orders] FOREIGN KEY([order_id])
REFERENCES [dbo].[Orders] ([order_id])
GO
ALTER TABLE [dbo].[Delivery_Orders] CHECK CONSTRAINT [FK_DeliveryOrders_Orders]
GO
ALTER TABLE [dbo].[Events]  WITH CHECK ADD  CONSTRAINT [FK_Events_Combos] FOREIGN KEY([combo_id])
REFERENCES [dbo].[Combos] ([combo_id])
GO
ALTER TABLE [dbo].[Events] CHECK CONSTRAINT [FK_Events_Combos]
GO
ALTER TABLE [dbo].[Events]  WITH CHECK ADD  CONSTRAINT [FK_Events_Orders] FOREIGN KEY([order_id])
REFERENCES [dbo].[Orders] ([order_id])
GO
ALTER TABLE [dbo].[Events] CHECK CONSTRAINT [FK_Events_Orders]
GO
ALTER TABLE [dbo].[Favorites]  WITH CHECK ADD  CONSTRAINT [FK_Favorites_MenuItems] FOREIGN KEY([menu_item_id])
REFERENCES [dbo].[Menu_Items] ([menu_item_id])
GO
ALTER TABLE [dbo].[Favorites] CHECK CONSTRAINT [FK_Favorites_MenuItems]
GO
ALTER TABLE [dbo].[Favorites]  WITH CHECK ADD  CONSTRAINT [FK_Favorites_Users] FOREIGN KEY([user_name])
REFERENCES [dbo].[Users] ([user_id])
GO
ALTER TABLE [dbo].[Favorites] CHECK CONSTRAINT [FK_Favorites_Users]
GO
ALTER TABLE [dbo].[Inventories]  WITH CHECK ADD  CONSTRAINT [FK_Inventories_Ingredients] FOREIGN KEY([ingredient_id])
REFERENCES [dbo].[Ingredients] ([ingredient_id])
GO
ALTER TABLE [dbo].[Inventories] CHECK CONSTRAINT [FK_Inventories_Ingredients]
GO
ALTER TABLE [dbo].[Inventories]  WITH CHECK ADD  CONSTRAINT [FK_Inventories_Suppliers] FOREIGN KEY([supplier_id])
REFERENCES [dbo].[Suppliers] ([supplier_id])
GO
ALTER TABLE [dbo].[Inventories] CHECK CONSTRAINT [FK_Inventories_Suppliers]
GO
ALTER TABLE [dbo].[Inventory_Branchs]  WITH CHECK ADD  CONSTRAINT [FK_InventorieBrands_Ingredients] FOREIGN KEY([ingredient_id])
REFERENCES [dbo].[Ingredients] ([ingredient_id])
GO
ALTER TABLE [dbo].[Inventory_Branchs] CHECK CONSTRAINT [FK_InventorieBrands_Ingredients]
GO
ALTER TABLE [dbo].[Inventory_Branchs]  WITH CHECK ADD  CONSTRAINT [FK_InventorieBrands_Suppliers] FOREIGN KEY([supplier_id])
REFERENCES [dbo].[Suppliers] ([supplier_id])
GO
ALTER TABLE [dbo].[Inventory_Branchs] CHECK CONSTRAINT [FK_InventorieBrands_Suppliers]
GO
ALTER TABLE [dbo].[Menu_Item_Ingredients]  WITH CHECK ADD  CONSTRAINT [FK__MenuItemI__MenuI__693CA210] FOREIGN KEY([menu_item_id])
REFERENCES [dbo].[Menu_Items] ([menu_item_id])
GO
ALTER TABLE [dbo].[Menu_Item_Ingredients] CHECK CONSTRAINT [FK__MenuItemI__MenuI__693CA210]
GO
ALTER TABLE [dbo].[Menu_Item_Ingredients]  WITH CHECK ADD  CONSTRAINT [FK_MenuItemIngredients_Ingredients] FOREIGN KEY([ingredient_id])
REFERENCES [dbo].[Ingredients] ([ingredient_id])
GO
ALTER TABLE [dbo].[Menu_Item_Ingredients] CHECK CONSTRAINT [FK_MenuItemIngredients_Ingredients]
GO
ALTER TABLE [dbo].[Menu_Items]  WITH CHECK ADD  CONSTRAINT [FK_MenuItems_Category] FOREIGN KEY([category_id])
REFERENCES [dbo].[Categories] ([category_id])
GO
ALTER TABLE [dbo].[Menu_Items] CHECK CONSTRAINT [FK_MenuItems_Category]
GO
ALTER TABLE [dbo].[Merge_Tables]  WITH CHECK ADD  CONSTRAINT [FK_Merge_Tables_Tables] FOREIGN KEY([table_id])
REFERENCES [dbo].[Restaurant_Tables] ([table_id])
GO
ALTER TABLE [dbo].[Merge_Tables] CHECK CONSTRAINT [FK_Merge_Tables_Tables]
GO
ALTER TABLE [dbo].[Order_Details]  WITH CHECK ADD  CONSTRAINT [FK__OrderDeta__MenuI__6C190EBB] FOREIGN KEY([menu_item_id])
REFERENCES [dbo].[Menu_Items] ([menu_item_id])
GO
ALTER TABLE [dbo].[Order_Details] CHECK CONSTRAINT [FK__OrderDeta__MenuI__6C190EBB]
GO
ALTER TABLE [dbo].[Order_Details]  WITH CHECK ADD  CONSTRAINT [FK__OrderDeta__Order__4222D4EF] FOREIGN KEY([order_id])
REFERENCES [dbo].[Orders] ([order_id])
GO
ALTER TABLE [dbo].[Order_Details] CHECK CONSTRAINT [FK__OrderDeta__Order__4222D4EF]
GO
ALTER TABLE [dbo].[Order_Thresholds]  WITH CHECK ADD  CONSTRAINT [FK_OrderThreshold_Ingredients] FOREIGN KEY([ingredient_id])
REFERENCES [dbo].[Ingredients] ([ingredient_id])
GO
ALTER TABLE [dbo].[Order_Thresholds] CHECK CONSTRAINT [FK_OrderThreshold_Ingredients]
GO
ALTER TABLE [dbo].[Order_Thresholds]  WITH CHECK ADD  CONSTRAINT [FK_OrderThreshold_InventorieBrands] FOREIGN KEY([inventory_branch_id])
REFERENCES [dbo].[Inventory_Branchs] ([inventory_branch_id])
GO
ALTER TABLE [dbo].[Order_Thresholds] CHECK CONSTRAINT [FK_OrderThreshold_InventorieBrands]
GO
ALTER TABLE [dbo].[Order_Thresholds]  WITH CHECK ADD  CONSTRAINT [FK_OrderThreshold_Inventories] FOREIGN KEY([inventory_id])
REFERENCES [dbo].[Inventories] ([inventory_id])
GO
ALTER TABLE [dbo].[Order_Thresholds] CHECK CONSTRAINT [FK_OrderThreshold_Inventories]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Combo] FOREIGN KEY([combo_id])
REFERENCES [dbo].[Combos] ([combo_id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Combo]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_OrderType1] FOREIGN KEY([order_type])
REFERENCES [dbo].[Order_Types] ([order_type_id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_OrderType1]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Users] FOREIGN KEY([user_name])
REFERENCES [dbo].[Users] ([user_id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Users]
GO
ALTER TABLE [dbo].[Rates]  WITH CHECK ADD  CONSTRAINT [FK_Rating_Menu_Items] FOREIGN KEY([menu_item_id])
REFERENCES [dbo].[Menu_Items] ([menu_item_id])
GO
ALTER TABLE [dbo].[Rates] CHECK CONSTRAINT [FK_Rating_Menu_Items]
GO
ALTER TABLE [dbo].[Rates]  WITH CHECK ADD  CONSTRAINT [FK_Rating_Users] FOREIGN KEY([user_id])
REFERENCES [dbo].[Users] ([user_id])
GO
ALTER TABLE [dbo].[Rates] CHECK CONSTRAINT [FK_Rating_Users]
GO
ALTER TABLE [dbo].[Receipt]  WITH CHECK ADD  CONSTRAINT [FK_Receipt_Inventories] FOREIGN KEY([inventory_id])
REFERENCES [dbo].[Inventories] ([inventory_id])
GO
ALTER TABLE [dbo].[Receipt] CHECK CONSTRAINT [FK_Receipt_Inventories]
GO
ALTER TABLE [dbo].[Receipt]  WITH CHECK ADD  CONSTRAINT [FK_Receipt_Suppliers] FOREIGN KEY([supplier_id])
REFERENCES [dbo].[Suppliers] ([supplier_id])
GO
ALTER TABLE [dbo].[Receipt] CHECK CONSTRAINT [FK_Receipt_Suppliers]
GO
ALTER TABLE [dbo].[Receipt_Details]  WITH CHECK ADD  CONSTRAINT [FK_ReceiptDetails_Ingredients] FOREIGN KEY([ingredient_id])
REFERENCES [dbo].[Ingredients] ([ingredient_id])
GO
ALTER TABLE [dbo].[Receipt_Details] CHECK CONSTRAINT [FK_ReceiptDetails_Ingredients]
GO
ALTER TABLE [dbo].[Receipt_Details]  WITH CHECK ADD  CONSTRAINT [FK_ReceiptDetails_Receipt] FOREIGN KEY([receipt_id])
REFERENCES [dbo].[Receipt] ([receipt_id])
GO
ALTER TABLE [dbo].[Receipt_Details] CHECK CONSTRAINT [FK_ReceiptDetails_Receipt]
GO
ALTER TABLE [dbo].[Reservations]  WITH CHECK ADD  CONSTRAINT [FK__Reservati__Table__3B75D760] FOREIGN KEY([table_id])
REFERENCES [dbo].[Restaurant_Tables] ([table_id])
GO
ALTER TABLE [dbo].[Reservations] CHECK CONSTRAINT [FK__Reservati__Table__3B75D760]
GO
ALTER TABLE [dbo].[Reservations]  WITH CHECK ADD  CONSTRAINT [FK_Reservations_Orders] FOREIGN KEY([order_id])
REFERENCES [dbo].[Orders] ([order_id])
GO
ALTER TABLE [dbo].[Reservations] CHECK CONSTRAINT [FK_Reservations_Orders]
GO
ALTER TABLE [dbo].[Reservations]  WITH CHECK ADD  CONSTRAINT [FK_Reservations_Users] FOREIGN KEY([user_name])
REFERENCES [dbo].[Users] ([user_id])
GO
ALTER TABLE [dbo].[Reservations] CHECK CONSTRAINT [FK_Reservations_Users]
GO
ALTER TABLE [dbo].[Restaurant_Tables]  WITH CHECK ADD  CONSTRAINT [FK_Restaurant_Tables_Restaurants] FOREIGN KEY([restaurant_id])
REFERENCES [dbo].[Restaurants] ([restaurant_id])
GO
ALTER TABLE [dbo].[Restaurant_Tables] CHECK CONSTRAINT [FK_Restaurant_Tables_Restaurants]
GO
ALTER TABLE [dbo].[Restaurant_Tables]  WITH CHECK ADD  CONSTRAINT [FK_Restaurant_Tables_Table_Types] FOREIGN KEY([table_type_id])
REFERENCES [dbo].[Table_Types] ([table_type_id])
GO
ALTER TABLE [dbo].[Restaurant_Tables] CHECK CONSTRAINT [FK_Restaurant_Tables_Table_Types]
GO
ALTER TABLE [dbo].[Restaurant_Tables]  WITH CHECK ADD  CONSTRAINT [FK_Tables_TableStatus] FOREIGN KEY([table_status_id])
REFERENCES [dbo].[Table_Status] ([table_status_id])
GO
ALTER TABLE [dbo].[Restaurant_Tables] CHECK CONSTRAINT [FK_Tables_TableStatus]
GO
ALTER TABLE [dbo].[Role_Functions]  WITH CHECK ADD  CONSTRAINT [FK_Role_Functions_Majors] FOREIGN KEY([major_id])
REFERENCES [dbo].[Majors] ([major_id])
GO
ALTER TABLE [dbo].[Role_Functions] CHECK CONSTRAINT [FK_Role_Functions_Majors]
GO
ALTER TABLE [dbo].[Role_Functions]  WITH CHECK ADD  CONSTRAINT [FK_Role_Functions_Roles] FOREIGN KEY([role_id])
REFERENCES [dbo].[Roles] ([role_id])
GO
ALTER TABLE [dbo].[Role_Functions] CHECK CONSTRAINT [FK_Role_Functions_Roles]
GO
ALTER TABLE [dbo].[Token]  WITH CHECK ADD  CONSTRAINT [FK_Token_Users] FOREIGN KEY([user_id])
REFERENCES [dbo].[Users] ([user_id])
GO
ALTER TABLE [dbo].[Token] CHECK CONSTRAINT [FK_Token_Users]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Restaurants] FOREIGN KEY([restaurant_brach_id])
REFERENCES [dbo].[Restaurants] ([restaurant_id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Restaurants]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Roles1] FOREIGN KEY([role_id])
REFERENCES [dbo].[Roles] ([role_id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Roles1]
GO
USE [master]
GO
ALTER DATABASE [springleaf_restaurant] SET  READ_WRITE 
GO
