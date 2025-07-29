"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dice1,
  Coins,
  TrendingUp,
  Zap,
  Target,
  RotateCcw,
  Triangle,
  Activity,
  Users,
  Trophy,
  Wallet,
  Shield,
  Cpu,
  Network,
  Lock,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { ChessIcon } from "@/components/chess-icon"

const games = [
  {
    id: "chess",
    name: "CHESS",
    icon: ChessIcon,
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    url: "https://next-chess-game-tau.vercel.app/",
    description: "Strategic battles on the blockchain",
    available: false,
    icons: '♛'
  },
  {
    id: "dice",
    name: "DICE",
    icon: Dice1,
    gradient: "from-pink-500 via-red-500 to-orange-500",
    url: "https://dice.blockchai.store",
    description: "Provably fair dice rolls",
    available: false,
  },
  {
    id: "slots",
    name: "SLOTS",
    icon: Coins,
    gradient: "from-purple-500 via-pink-500 to-red-500",
    url: "https://slots.blockchai.store",
    description: "Decentralized slot machines",
    available: false,
  },
  {
    id: "flip",
    name: "FLIP",
    icon: RotateCcw,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    url: "https://flip.blockchai.store",
    description: "Quantum coin flipping",
    available: false,
  },
  {
    id: "hilo",
    name: "HILO",
    icon: TrendingUp,
    gradient: "from-green-400 via-teal-500 to-blue-500",
    url: "https://hilo.blockchai.store",
    description: "Algorithmic predictions",
    available: false,
  },
  {
    id: "mines",
    name: "MINES",
    icon: Target,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    url: "https://mines.blockchai.store",
    description: "Navigate the crypto minefield",
    available: false,
  },
  {
    id: "roulette",
    name: "ROULETTE",
    icon: Activity,
    gradient: "from-emerald-400 via-green-500 to-teal-500",
    url: "https://roulette.blockchai.store",
    description: "Blockchain roulette wheel",
    available: false,
  },
  {
    id: "plinko",
    name: "PLINKO",
    icon: Triangle,
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    url: "https://plinko.blockchai.store",
    description: "Physics-based blockchain drops",
    available: false,
  },
  {
    id: "crash",
    name: "CRASH",
    icon: Zap,
    gradient: "from-red-500 via-pink-500 to-purple-500",
    url: "https://crash.blockchai.store",
    description: "Exponential growth curves",
    available: false,
  },
]

const recentPlays = [
  {
    user: "0x7A9f...3B2c",
    game: "CHESS",
    result: "won",
    amount: "0.05 SOL",
    multiplier: null,
    time: "2m ago",
    txHash: "5KJp9...",
  },
  {
    user: "0x4D8e...7F1a",
    game: "CHESS",
    result: "won",
    amount: "0.08 SOL",
    multiplier: null,
    time: "5m ago",
    txHash: "8Nm2x...",
  },
  {
    user: "0x2C5b...9E4d",
    game: "CHESS",
    result: "lost",
    amount: "0.03 SOL",
    multiplier: null,
    time: "7m ago",
    txHash: "3Qr7k...",
  },
  {
    user: "0x9F1c...6A8e",
    game: "CHESS",
    result: "won",
    amount: "0.12 SOL",
    multiplier: null,
    time: "9m ago",
    txHash: "7Ht5m...",
  },
  {
    user: "0x6E3a...2D9f",
    game: "CHESS",
    result: "won",
    amount: "0.06 SOL",
    multiplier: null,
    time: "12m ago",
    txHash: "4Bv8n...",
  },
  {
    user: "0x8B7d...5C1e",
    game: "CHESS",
    result: "lost",
    amount: "0.04 SOL",
    multiplier: null,
    time: "15m ago",
    txHash: "9Lp3q...",
  },
]

export default function Web3GamblingLanding() {
  const [mounted, setMounted] = useState(false)
  const [activeUsers, setActiveUsers] = useState(1247)
  const [blockHeight, setBlockHeight] = useState(245891)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 3) - 1)
      setBlockHeight((prev) => prev + Math.floor(Math.random() * 2))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Animated Neon Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300ffff' fillOpacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 backdrop-blur-xl bg-black/50">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
          </div>
          <div>
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blockchain.Store
            </span>
            <div className="text-xs text-cyan-400 font-mono">v3.0 PROTOCOL</div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Badge
            variant="secondary"
            className="bg-green-500/20 text-green-400 border-green-500/50 shadow-lg shadow-green-500/20"
          >
            <Network className="w-4 h-4 mr-1" />
            Block #{blockHeight.toLocaleString()}
          </Badge>
          <Badge
            variant="secondary"
            className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
          >
            <Users className="w-4 h-4 mr-1" />
            {activeUsers.toLocaleString()} Nodes
          </Badge>
          {/* <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white border-0 shadow-lg shadow-cyan-500/25 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Wallet className="w-4 h-4 mr-2 relative z-10" />
            <span className="relative z-10">Connect Wallet</span>
          </Button> */}
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-8 py-3 mb-8 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 backdrop-blur-sm">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">DECENTRALIZED GAMING PROTOCOL</span>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>

          {/* <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
            <span className="relative z-100">PLAY.WIN.HODL</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"></div>
          </h1> */}
           <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
            Play. Win. Repeat.
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Enter the metaverse of decentralized gaming. Powered by blockchain technology, secured by cryptography, and
            governed by smart contracts. Every game is provably fair, every transaction is transparent.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25 relative overflow-hidden group border border-cyan-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">ENTER THE MATRIX</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-10 py-4 text-lg rounded-xl bg-transparent backdrop-blur-sm shadow-lg shadow-cyan-500/10"
            >
              <Trophy className="w-5 h-5 mr-2" />
              LEADERBOARD
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-6 text-center relative z-10">
              <Trophy className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2 font-mono">$2.4M+</div>
              <div className="text-cyan-400 text-sm font-medium">TOTAL VALUE LOCKED</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 backdrop-blur-xl shadow-lg shadow-purple-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-6 text-center relative z-10">
              <Users className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2 font-mono">50K+</div>
              <div className="text-purple-400 text-sm font-medium">ACTIVE WALLETS</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 backdrop-blur-xl shadow-lg shadow-green-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-6 text-center relative z-10">
              <Lock className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2 font-mono">100%</div>
              <div className="text-green-400 text-sm font-medium">DECENTRALIZED SECURITY</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-pink-500/10 to-red-500/10 border-2 border-pink-500/30 backdrop-blur-xl shadow-lg shadow-pink-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-6 text-center relative z-10">
              <Zap className="w-10 h-10 text-pink-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2 font-mono">1.2M+</div>
              <div className="text-pink-400 text-sm font-medium">TRANSACTIONS</div>
            </CardContent>
          </Card>
        </div>

        {/* Games Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="uppercase text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Choose Your Game
            </h2>
            <p className="text-gray-400 text-lg">Smart contract powered games with provable fairness</p>
          </div>

                <div
  className="group relative overflow-hidden rounded-xl bg-black/60 border-2 backdrop-blur-xl transition-all duration-500 hover:border-teal-400/60 hover:shadow-2xl hover:shadow-teal-500/25 cursor-pointer border-gray-700/30 opacity-60 mb-8"
  onClick={() => window.open('https://next-chess-game-tau.vercel.app/', '_blank')}
>
  {/* Holographic Effect */}
  <div
    className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-purple-500/20 to-teal-500/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
  ></div>

  {/* Neon Border Effect */}
  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/30 to-purple-400/30 blur-sm"></div>
  </div>

  {/* Chessboard Pattern Background */}
  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
    <div className="w-full h-full bg-[linear-gradient(45deg,#d3d3d3_25%,transparent_25%),linear-gradient(-45deg,#d3d3d3_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#d3d3d3_75%),linear-gradient(-45deg,transparent_75%,#d3d3d3_75%)] bg-[length:20px_20px] opacity-50"></div>
  </div>

  <div className="relative p-8 text-center z-10">
    <div className="relative mb-6">
      {/* Chess Piece Icon with Glow */}
      <div className="relative text-9xl md:text-[12rem] text-white filter drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] animate-bounce-slow">
        ♛
      </div>
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/30 to-purple-400/30 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"
      ></div>
    </div>

    <h3
      className="text-2xl font-bold mb-3 font-mono text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500"
    >
      Royal Chess Arena
    </h3>

    <p
      className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-500"
    >
      Strategic battles on the blockchain
    </p>

    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
      <button
        className="cursor-pointer bg-gradient-to-r from-teal-500 to-purple-500 text-white border-0 shadow-lg font-mono text-xs px-6 py-2 rounded-full hover:from-teal-600 hover:to-purple-600 transition-all duration-300"
      >
        Play Now
      </button>
    </div>
  </div>
</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => {
              const IconComponent = game.icon
              return (
                <Card
                  key={game.id}
                  className={`group relative overflow-hidden bg-black/50 border-2 backdrop-blur-xl transition-all duration-500 ${
                    game.available
                      ? "border-cyan-500/30 hover:border-cyan-400/60 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer"
                      : "border-gray-700/30 opacity-60 cursor-not-allowed"
                  }`}
                  onClick={() => game.available && window.open(game.url, "_blank")}
                >
                  {/* Holographic Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 ${game.available ? "group-hover:opacity-10" : "opacity-5"} transition-opacity duration-500`}
                  ></div>

                  {/* Neon Border Effect */}
                  {game.available && (
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${game.gradient} blur-sm`}></div>
                    </div>
                  )}

                  {!game.available && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-3 shadow-lg shadow-cyan-500/25">
                          PROTOCOL LOADING...
                        </div>
                        <p className="text-gray-400 text-sm font-mono">Deploying Smart Contracts</p>
                      </div>
                    </div>
                  )}

                  <CardContent className="relative p-8 text-center z-10">
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${game.gradient} flex items-center justify-center shadow-lg relative z-10 ${
                          game.available ? "group-hover:shadow-2xl group-hover:shadow-cyan-500/25" : ""
                        } transition-all duration-500`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      {game.available && (
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${game.gradient} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                        ></div>
                      )}
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-3 font-mono ${
                        game.available
                          ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text"
                          : "text-gray-400"
                      } transition-all duration-500`}
                    >
                      {game.name}
                    </h3>

                    <p
                      className={`text-gray-400 mb-4 ${
                        game.available ? "group-hover:text-gray-300" : ""
                      } transition-colors duration-500`}
                    >
                      {game.description}
                    </p>

                    {game.available && (
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${game.gradient} text-white border-0 shadow-lg font-mono text-xs px-6 py-2`}
                        >
                          EXECUTE PROTOCOL
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Recent Plays Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              LIVE BLOCKCHAIN FEED
            </h2>
            <p className="text-gray-400">Real-time transaction monitoring</p>
          </div>

          <Card className="bg-black/50 border-2 border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
            <CardContent className="p-8">
              <div className="space-y-4">
                {recentPlays.map((play, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-6 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/30 hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold font-mono shadow-lg">
                          {play.user.slice(2, 4).toUpperCase()}
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30"></div>
                      </div>
                      <div>
                        <div className="font-bold text-white font-mono text-sm">{play.user}</div>
                        <div className="text-xs text-cyan-400 font-mono">
                          {play.game} • TX: {play.txHash}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div
                        className={`font-bold font-mono ${play.result === "won" ? "text-green-400" : "text-red-400"}`}
                      >
                        {play.result === "won" ? "+" : "-"}
                        {play.amount}
                        {play.multiplier && <span className="ml-2 text-yellow-400">({play.multiplier})</span>}
                      </div>
                      <div className="text-xs text-gray-400 font-mono">{play.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 mt-20 py-12 backdrop-blur-xl bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Blockchain.Store
            </span>
            <div className="text-xs text-cyan-400 font-mono mt-1">Decentralized Gaming Infrastructure</div>
          </div>
          <p className="text-gray-400 mb-6 font-mono text-sm">
            &copy; 2024 Blockchain.store - Powered by Coullax
          </p>
          <div className="flex justify-center space-x-8">
            <Link href="/whitepaper" className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm">
              WHITEPAPER
            </Link>
            <Link href="/audit" className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm">
              SECURITY AUDIT
            </Link>
            <Link href="/docs" className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm">
              API DOCS
            </Link>
            <Link href="/governance" className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm">
              GOVERNANCE
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
