import React from 'react';


export function ProductCard({ name, price, rating, inStock }) {
  const stockText = inStock ? 'In Stock' : 'Out of Stock';

  return (
    <article
      className="catalog-card product-card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '260px',
        padding: '22px 20px 18px',
        borderRadius: '22px',
        background: 'linear-gradient(135deg, rgba(19, 24, 40, 0.98), rgba(12, 16, 24, 0.96))',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 18px 30px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top right, rgba(117, 92, 255, 0.22), transparent 36%), radial-gradient(circle at bottom left, rgba(34, 211, 238, 0.14), transparent 32%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '18px',
        }}
      >
        <p
          className="eyebrow"
          style={{
            margin: 0,
            fontSize: '10px',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#b9c0d6',
          }}
        >
          sample product
        </p>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '7px 10px',
            borderRadius: '999px',
            background: inStock ? 'rgba(74, 222, 128, 0.12)' : 'rgba(248, 113, 113, 0.12)',
            border: `1px solid ${inStock ? 'rgba(74, 222, 128, 0.4)' : 'rgba(248, 113, 113, 0.4)'}`,
            color: inStock ? '#8ae6af' : '#ff9ca1',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          {stockText}
        </span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            margin: '0 0 14px',
            fontSize: '2rem',
            lineHeight: 1.1,
            letterSpacing: '-0.06em',
            color: '#f5f7ff',
          }}
        >
          {name}
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '18px',
            paddingBottom: '18px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p
            className="price"
            style={{
              margin: 0,
              fontSize: '2.2rem',
              fontWeight: 800,
              letterSpacing: '-0.08em',
              color: '#ffffff',
            }}
          >
            {price.toLocaleString('ko-KR')}원
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 8px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.04)',
              color: '#f8d76c',
              fontWeight: 700,
              fontSize: '0.85rem',
            }}
          >
            <span aria-label="rating">★</span>
            <span>{rating}</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
            color: '#dfe6ff',
            fontSize: '0.8rem',
          }}
        >
          <span style={{ opacity: 0.7 }}>Rating</span>
          <span style={{ fontWeight: 700 }}>{rating} / 5 stars</span>
        </div>
      </div>
    </article>
  );
}

export default function ProductPage() {
  return (
    <ExerciseLayout
      title="PRODUCT CARDS"
      description="One component, different props. Sample products demonstrate KRW prices, ratings, and both stock states."
    >
      <section className="catalog-grid" aria-label="Sample products">
        <ProductCard name="Wireless Earbuds" price={89000} rating={4.5} inStock={true} />
        <ProductCard name="Compact Keyboard" price={69000} rating={4.2} inStock={false} />
        <ProductCard name="USB-C Hub" price={35000} rating={4} inStock={true} />
        <ProductCard name="Wireless Mouse" price={29000} rating={4.6} inStock={true} />
        <ProductCard name="Laptop Stand" price={39000} rating={4.4} inStock={true} />
        <ProductCard name="Portable SSD 1TB" price={119000} rating={4.8} inStock={false} />
        <ProductCard name="27-inch Monitor" price={249000} rating={4.7} inStock={true} />
        <ProductCard
          name="Noise-Cancelling Headphones"
          price={159000}
          rating={4.6}
          inStock={true}
        />
        <ProductCard name="1080p Webcam" price={49000} rating={4.3} inStock={false} />
      </section>

      <p className="data-note">
        Practice data only. Change a prop in ProductCard.jsx to see how the same component renders
        different values.
      </p>
    </ExerciseLayout>
  );
}
