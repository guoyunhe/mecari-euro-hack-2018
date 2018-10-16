# The Junglers @ Mecari Euro Hack 2018

## Problem

Adding photos and specifications to second-hand item listings is painful.

For sellers: it is time consuming to find specifications and product photos on
the internet.

For buyers: it is not clear which photo is taken by sellers, whether it is
photoshoped too much or it is downloaded from Amazon. If specs are not provided,
they need to spend time searching the web.

## Solution

Our solution aims to create more trust and comfort for both buyers and sellers
by enriching the posting content with original product specification and photo
verification services. Our suggested photo and specification of the item are
provided based on the seller's product keyword input. The enriched information
will not only ease the input effort for sellers but also is useful for buyer to
evaluate the item value. In addition, automated photo processing service with
user friendly interface will help buyers to detect whether a photo is original,
modified or downloaded from the internet.

Check out our 5s demo for photo processing service here:

![Demo](https://thumbs.gfycat.com/JaggedSecondaryFirefly-size_restricted.gif)

Technical areas, tools, technologies, brief algorithm:

- Photo and metadata processing to detect whether a photo is original or
  heavily modified or downloaded from the internet.
- OCR to get information from product box or label.
- Integrate third-party API to get product specs and market prices.

## Technology

For photo analytics:

- Metadata processing to determine originality
- Machine learning to guess how close a photo is to reality
- Image processing to find manual modification

For specification finding:

- API of Amazon, GSMArena (for phones and tablets), IKEA (for furniture), etc.
- Natural language processing to get product name and other key information

## Copyright

2018 Guo Yunhe, Yuexin Du, Thanh Dao

## License

GNU Affero General Public License version 3
